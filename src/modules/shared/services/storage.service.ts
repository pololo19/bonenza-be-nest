import { BlobServiceClient } from '@azure/storage-blob';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AppEnvironment } from 'app.environment';
import * as fs from 'fs';

@Injectable()
export class StorageService {
  private readonly serviceClient: BlobServiceClient;

  constructor(private readonly appEnvironment: AppEnvironment) {
    this.serviceClient = BlobServiceClient.fromConnectionString(
      appEnvironment.azureStorageConnection,
    );
  }

  async upload(
    file: Express.Multer.File,
    fileName: string,
    folder: string,
    isDeleteAfter: boolean = true,
  ) {
    try {
      // let i = 1;
      // const containers = this.serviceClient.listContainers();
      // for await (const container of containers) {
      //   console.log(`Container ${i++}: ${container.name}`);
      // }
      const containerClient = this.serviceClient.getContainerClient(
        this.appEnvironment.azureStorageContainer,
      );
      const blobClient = containerClient.getBlockBlobClient(
        `${folder}/${fileName}`,
      );

      const { originalname, path, mimetype } = file;
      const content = fs.readFileSync(path);
      const uploadBlobResponse = await blobClient.upload(
        content,
        content.length,
        {
          blobHTTPHeaders: {
            blobContentType: mimetype,
          },
        },
      );
      console.log(`File uploaded successfully. ETag: ${uploadBlobResponse}`);
      // if (isDeleteAfter && file.path && fs.existsSync(file.path))
      //   fs.unlinkSync(file.path);
      return uploadBlobResponse;
    } catch (error) {
      console.log('upload storage error', error);
      throw new InternalServerErrorException('upload error', {
        description: 'upload storage error',
      });
    }
  }

  async delete(fileName: string, folder: string) {
    try {
      const containerClient = this.serviceClient.getContainerClient(
        this.appEnvironment.azureStorageContainer,
      );
      const blobClient = containerClient.getBlockBlobClient(
        `${folder}/${fileName}`,
      );
      await blobClient.deleteIfExists();
      console.log(`File "${fileName}" deleted successfully.`);
      return true;
    } catch (error) {
      console.log('delete file error', error);
      throw new InternalServerErrorException('delete error', {
        description: 'delete storage error',
      });
    }
  }
}
