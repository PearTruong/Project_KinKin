import Dexie, { type EntityTable } from 'dexie';

export type CartLine = { productId: string; quantity: number };
type Draft = { id: string; items: CartLine[]; updatedAt: string };

const db = new Dexie('kinkin-pos-demo') as Dexie & {
  drafts: EntityTable<Draft, 'id'>;
};

db.version(1).stores({ drafts: 'id, updatedAt' });

export async function loadCart(): Promise<CartLine[]> {
  return (await db.drafts.get('current'))?.items ?? [];
}

export async function saveCart(items: CartLine[]) {
  await db.drafts.put({ id: 'current', items, updatedAt: new Date().toISOString() });
}
