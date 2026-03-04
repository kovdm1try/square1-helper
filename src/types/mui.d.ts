import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ZIndex {
    loader: number;
    backdrop: number;
  }
}
