import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('repos')
export class Repo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  url: string;

  @Column()
  name: string;

  @Column({ default: 'indexing' })
  status: string; // indexing, ready, error

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => FileEntity, (file) => file.repo)
  files: FileEntity[];
}

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repo_id: string;

  @ManyToOne(() => Repo, (repo) => repo.files, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'repo_id' })
  repo: Repo;

  @Column()
  path: string;

  @Column({ nullable: true })
  language: string;

  @Column({ type: 'integer', nullable: true })
  size: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Chunk, (chunk) => chunk.file)
  chunks: Chunk[];
}

@Entity('chunks')
export class Chunk {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repo_id: string;

  @Column()
  file_id: string;

  @ManyToOne(() => FileEntity, (file) => file.chunks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'file_id' })
  file: FileEntity;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'integer' })
  token_count: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Embedding, (embedding) => embedding.chunk)
  embeddings: Embedding[];
}

@Entity('embeddings')
export class Embedding {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  chunk_id: string;

  @ManyToOne(() => Chunk, (chunk) => chunk.embeddings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'chunk_id' })
  chunk: Chunk;

  @Column({ type: 'text', nullable: true })
  vector: string; // We will use raw SQL for actual vector operations

  @CreateDateColumn()
  created_at: Date;
}
