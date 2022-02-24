export interface ProjectData {
  name: string;
  githubUrl: string;
  siteUrl: string;
  shortDesc: string;
  longDesc: LongDesc;
  thumbnail: Thumbnail;
  images: ImageElement[];
  slug: string;
  featured: boolean;
  techStack: string[];
}

export interface ImageElement {
  metadata: Metadata;
  sys: ImageSys;
  fields: ImageFields;
}

export interface ImageFields {
  title: string;
  description?: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface ImageSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}

export interface LongDesc {
  data: Data;
  content: LongDescContent[];
  nodeType: string;
}

export interface LongDescContent {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface Thumbnail {
  metadata: Metadata;
  sys: ImageSys;
  fields: ThumbnailFields;
}

export interface ThumbnailFields {
  title: string;
  file: File;
}
