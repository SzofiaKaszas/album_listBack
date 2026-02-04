import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';
import { AlbumOrEp } from 'generated/prisma/enums';

export class CreateAlbumDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  artist: string;

  @IsNotEmpty()
  @IsEnum(AlbumOrEp)
  albumOrEp: AlbumOrEp;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  releaseYear: number;
  
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(10)
  rating: number;
}
