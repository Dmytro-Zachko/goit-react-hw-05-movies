import styled from '@emotion/styled'

export const Title = styled.h1`
  display: block;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const MovieList = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`
export const MovieGalleryItem = styled.li`
  margin-bottom: 20px;
  width: 300px;
`;


export const MovieTitle = styled.p`
color: #000;
 font-size: 18px;
  text-align: center;
  margin-top: 8px;
`