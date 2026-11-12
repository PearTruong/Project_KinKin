import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Xi đánh giày' })
  @IsString()
  @MaxLength(150)
  name!: string;

  @ApiPropertyOptional({ example: 45000, description: 'Giá bán của sản phẩm (VND)' })
  @IsOptional()
  @IsInt()
  @Min(1)
  salePrice?: number;

  @ApiPropertyOptional({ example: 45000, description: 'Trường giá tương thích tạm thời cho demo' })
  @IsOptional()
  @IsInt()
  @Min(1)
  price?: number;

  @ApiPropertyOptional({ example: 25000, description: 'Giá vốn sản phẩm (VND)' })
  @IsOptional()
  @IsInt()
  @Min(0)
  costPrice?: number;

  @ApiPropertyOptional({ example: 'hộp' })
  @IsOptional()
  @IsString()
  unit?: string;

  @ApiPropertyOptional({ example: 5, description: 'Ngưỡng cảnh báo số lượng tồn tối thiểu' })
  @IsOptional()
  @IsInt()
  @Min(0)
  alertThreshold?: number;

  @ApiPropertyOptional({ example: 30, description: 'Ngưỡng số ngày tồn lâu' })
  @IsOptional()
  @IsInt()
  @Min(0)
  agedStockThresholdDays?: number;
}
