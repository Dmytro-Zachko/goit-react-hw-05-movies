import styled from '@emotion/styled'

export const SearchBarForm = styled.form`
    display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;`

  export const SearchBarButton = styled.button`
     display: inline-block;

height: 32px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
  opacity: 1;
}
  `

export const SearchBarButtonLabel = styled.span`
  position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;`

export const SearchBarInput = styled.input`
     display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  
  ::placeholder {
  font: inherit;
  font-size: 18px;
}
  ` 