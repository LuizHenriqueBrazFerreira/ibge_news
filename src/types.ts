export type NewsType = {
  id: number,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  editorias: string,
  imagens: string,
  link: string,
};

export type ImagePathType = { image_intro: string };

export type SearchType = { filter:string, search:string };
