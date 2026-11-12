import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { createCorsOriginValidator, getAllowedOrigins } from './cors.config';

describe('CORS Configuration & Validation', () => {
  describe('getAllowedOrigins()', () => {
    it('should parse comma-separated FRONTEND_URLS and trim whitespace', () => {
      const env = {
        FRONTEND_URLS:
          ' https://kinkin-pos-demo.vercel.app , https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app ',
      };
      const origins = getAllowedOrigins(env);
      expect(origins).toEqual([
        'https://kinkin-pos-demo.vercel.app',
        'https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app',
      ]);
    });

    it('should filter out empty items and wildcard *', () => {
      const env = {
        FRONTEND_URLS: 'https://kinkin-pos-demo.vercel.app, , *, https://preview.vercel.app, ',
      };
      const origins = getAllowedOrigins(env);
      expect(origins).toEqual([
        'https://kinkin-pos-demo.vercel.app',
        'https://preview.vercel.app',
      ]);
    });

    it('should fall back to FRONTEND_URL when FRONTEND_URLS is not set', () => {
      const env = {
        FRONTEND_URL: 'https://kinkin-pos-demo.vercel.app',
      };
      const origins = getAllowedOrigins(env);
      expect(origins).toEqual(['https://kinkin-pos-demo.vercel.app']);
    });

    it('should fall back to FRONTEND_URL when FRONTEND_URLS is empty or only whitespace', () => {
      const env = {
        FRONTEND_URLS: '   ',
        FRONTEND_URL: 'https://kinkin-pos-demo.vercel.app',
      };
      const origins = getAllowedOrigins(env);
      expect(origins).toEqual(['https://kinkin-pos-demo.vercel.app']);
    });

    it('should fall back to default localhost:3000 when neither is set', () => {
      const env = {};
      const origins = getAllowedOrigins(env);
      expect(origins).toEqual(['http://localhost:3000']);
    });
  });

  describe('createCorsOriginValidator()', () => {
    const allowed = [
      'https://kinkin-pos-demo.vercel.app',
      'https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app',
    ];
    const validator = createCorsOriginValidator(allowed);

    it('should allow production origin', (done) => {
      validator('https://kinkin-pos-demo.vercel.app', (err, allow) => {
        expect(err).toBeNull();
        expect(allow).toBe(true);
        done();
      });
    });

    it('should allow preview origin', (done) => {
      validator(
        'https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app',
        (err, allow) => {
          expect(err).toBeNull();
          expect(allow).toBe(true);
          done();
        },
      );
    });

    it('should reject unlisted/malicious origin', (done) => {
      validator('https://malicious-site.com', (err, allow) => {
        expect(err).toBeNull();
        expect(allow).toBe(false);
        done();
      });
    });

    it('should reject origin with protocol or subdomain mismatch', (done) => {
      validator('http://kinkin-pos-demo.vercel.app', (err, allow) => {
        expect(err).toBeNull();
        expect(allow).toBe(false);
        done();
      });
    });

    it('should allow requests with no origin header (server-to-server / curl)', (done) => {
      validator(undefined, (err, allow) => {
        expect(err).toBeNull();
        expect(allow).toBe(true);
        done();
      });
    });
  });

  describe('NestJS HTTP CORS Integration', () => {
    let app: INestApplication;
    let baseUrl: string;

    const allowedOrigins = [
      'https://kinkin-pos-demo.vercel.app',
      'https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app',
    ];

    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
      }).compile();

      app = moduleFixture.createNestApplication();
      app.setGlobalPrefix('api');
      app.enableCors({
        origin: createCorsOriginValidator(allowedOrigins),
        credentials: true,
      });

      await app.listen(0);
      baseUrl = await app.getUrl();
    });

    afterAll(async () => {
      await app.close();
    });

    it('should respond with CORS headers for production origin', async () => {
      const res = await fetch(`${baseUrl}/api/health`, {
        headers: { Origin: 'https://kinkin-pos-demo.vercel.app' },
      });
      expect(res.status).toBe(200);
      expect(res.headers.get('access-control-allow-origin')).toBe(
        'https://kinkin-pos-demo.vercel.app',
      );
      expect(res.headers.get('access-control-allow-credentials')).toBe('true');
    });

    it('should respond with CORS headers for preview origin', async () => {
      const res = await fetch(`${baseUrl}/api/health`, {
        headers: {
          Origin: 'https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app',
        },
      });
      expect(res.status).toBe(200);
      expect(res.headers.get('access-control-allow-origin')).toBe(
        'https://kinkin-pos-demo-git-feat-fe-01-foundation.vercel.app',
      );
      expect(res.headers.get('access-control-allow-credentials')).toBe('true');
    });

    it('should NOT set access-control-allow-origin for untrusted origin', async () => {
      const res = await fetch(`${baseUrl}/api/health`, {
        headers: { Origin: 'https://evil-attacker.com' },
      });
      expect(res.status).toBe(200);
      expect(res.headers.get('access-control-allow-origin')).toBeNull();
    });
  });
});
