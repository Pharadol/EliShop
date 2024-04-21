export interface Thumbnail {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: null;
      width: number;
      height: number;
      formats: {
        thumbnail: Format;
        medium: Format;
        small: Format;
      };
      hash: string;
      ext: string;
      mimi: string;
      size: number;
      url: string;
      previewUrl:  null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface Format {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}
