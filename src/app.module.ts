import { Module } from '@nestjs/common';
import { TaskModule} from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule],
})
export class AppModule {}
