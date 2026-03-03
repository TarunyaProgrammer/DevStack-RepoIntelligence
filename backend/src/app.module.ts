import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepoModule } from './repo/repo.module';
import { IngestionModule } from './ingestion/ingestion.module';
import { ChunkModule } from './chunk/chunk.module';
import { EmbeddingModule } from './embedding/embedding.module';
import { SearchModule } from './search/search.module';
import { RagModule } from './rag/rag.module';

@Module({
  imports: [RepoModule, IngestionModule, ChunkModule, EmbeddingModule, SearchModule, RagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
