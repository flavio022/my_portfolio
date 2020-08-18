import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import uploadConfig from "@config/upload";

@Entity("projects")
class Projects {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;

  @Column()
  descricao: string;

  @Column()
  git: string;

  @Column()
  url: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "image_url" })
  getImage_url(): string | null {
    if (!this.image) {
      return null;
    }

    return `https://${uploadConfig.config.aws.bucket}.s3.us-east-2.amazonaws.com/${this.image}`;
  }
}

export default Projects;
