import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private readonly db : PrismaService){}

  create(createAlbumDto: CreateAlbumDto) {
    return this.db.albums.create({
      data: createAlbumDto,
    });
  }

  findAll() {
    return this.db.albums.findMany();
  }

  findOne(id: number) {
    return this.db.albums.findFirstOrThrow(
      {
        where: {id: id}
      }
    );
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return this.db.albums.update({
      where: {id: id},
      data: updateAlbumDto,
    });
  }

  remove(id: number) {
    return this.db.albums.delete({
      where: {id: id}
    });
  }
}
