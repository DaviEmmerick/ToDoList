import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85rem;
`
export const Box = styled.div`
  background-color: #777;
  border-radius: .5rem;
  width: 45rem; 
  height: 68rem;
  @media(min-width: 390px) and (max-width: 844px){
    width: 22rem;
    height: 60rem;
    margin-top: -20rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    width: 21rem;
    height: 60rem;
    margin-top: -20rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    width: 20rem;
    height: 62rem;
    margin-top: -20rem;
  }
`
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 2rem;
  @media(min-width: 390px) and (max-width: 844px){
    font-size: 1.6rem;

  }
  @media(min-width: 375px) and (max-width: 812px){
    font-size: 1.6rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    font-size: 1.6rem;
  }
`
export const Search = styled.h1`
  font-size: 1.7rem;
  margin-top: 4rem;
  margin-left: 2rem;
  @media(min-width: 390px) and (max-width: 844px){
    font-size: 1.6rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    font-size: 1.3rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    font-size: 1.3rem;
  }
`
export const Input = styled.input`
  background-color: #fff;
  width: 40rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  border-radius: .5rem;
  margin-top: .5rem;
  margin-left: 2rem;
  outline: none;
  padding: 1rem;
  @media(min-width: 390px) and (max-width: 844px){
    width: 18rem;
    height: 2.5rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
   width: 18rem;
   height: 2rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
   width: 17rem;
   height: 2rem;
  }

`
export const Line = styled.hr`
  margin-top: 1.5rem;
  margin-left: 2rem;
  width: 40rem;
  color: #000;
  @media(min-width: 390px) and (max-width: 844px){
    width: 18rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
   width: 18rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
   width: 17rem;
  }
`
export const TitleTwo = styled.h1`
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-left: 2rem;
  @media(min-width: 390px) and (max-width: 844px){
    font-size: 1.4rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    font-size: 1.3rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    font-size: 1.3rem;
  }
`
export const Status = styled.p`
  font-size: 1rem;
  margin-left: 2rem;
  margin-top: 1rem;
  @media(min-width: 375px) and (max-width: 812px){
    font-size: .8rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    font-size: 1rem;
  }
`
export const Select = styled.select`
  background-color: #fff;
  width: 40rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  border-radius: .5rem;
  margin-top: .5rem;
  margin-left: 2rem;
  outline: none;
  @media(min-width: 390px) and (max-width: 844px){
    width: 18rem;
    height: 2.5rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
   width: 18rem;
   height: 2rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
   width: 17rem;
   height: 2rem;
  }
`
export const ToDoList = styled.h1`
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-left: 2rem;
  @media(min-width: 390px) and (max-width: 844px){
    font-size: 1.4rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    font-size: 1.3rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    font-size: 1.3rem;
  }
`
export const Send = styled.button`
  width: 40rem;
  height: 2.5rem;
  color: #000;
  background-color: #fff;
  border-radius: .5rem; 
  cursor: pointer;
  border: none;
  margin-top: 1rem;
  margin-left: 2rem;
  &:hover{
    background-color: #000;
    color: #fff;
    transition: .8s;
  }

  @media(min-width: 390px) and (max-width: 844px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 2.5rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 2rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 2rem;
  }
`
export const Order = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 26rem;

`
export const BoxMessage = styled.div`
  width: 40rem;
  height: 2rem;
  background-color: #fff;
  padding: .5rem;
  border-radius: .2rem;
  margin-left: 2rem;
  margin-top: 1rem;
  @media(min-width: 390px) and (max-width: 844px){
    width: 18rem;
    height: 2.5rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
   width: 18rem;
   height: 2rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
   width: 17rem;
   height: 2rem;
  }
`
export const ButtonOne = styled.button` 
  background: none;
  margin-left: 30rem;
  margin-top: -.2rem;
  background-color: lightgreen;
  border: none;
  border-radius: .2rem;
  height: 1.5rem;
  width: 5rem;
  color: #fff;
  cursor: pointer;
  @media(min-width: 390px) and (max-width: 844px){
    width: 3.2rem;
    height: 1.5rem;
    margin-left: 11rem;
    font-size: .6rem;  
  }
  @media(min-width: 375px) and (max-width: 812px){
   width: 2.8rem;
   height: 1.2rem;
   margin-left: 12.2rem;
   font-size: .5rem; 
  }
  @media(min-width: 360px) and (max-width: 800px){
   width: 2.5rem;
   height: 1.2rem;
   margin-left: 11.5rem;
   font-size: .4rem; 
  }
  
`
export const MessageContainer = styled.div`
  display: flex; 
  align-items: center;
`
export const Mensagem = styled.div`
  margin-left: -38rem;
  @media(min-width: 390px) and (max-width: 844px){
    margin-left: -17.2rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    margin-left: -17rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
    margin-left: -16rem;
    font-size: .8rem;
  }
`
export const ButtonTwo = styled.button`
  background-color: red;
  color: #fff;
  margin-left: 1rem;
  border: none;
  cursor: pointer;
  width: 2rem;
  height: 1.5rem;
  margin-top: -.2rem;
  border-radius: .2rem;
  @media(min-width: 390px) and (max-width: 844px){
    width: 1.5rem;
    height: 1.7rem;
    font-size: .7rem;
  }
  @media(min-width: 375px) and (max-width: 812px){
    width: 1.5rem;
    height: 1.4rem;
    font-size: .7rem;
    margin-left: .5rem;
  }
  @media(min-width: 360px) and (max-width: 800px){
   width: 1.5;
   height: 1.3rem;
   margin-left: .2rem;
   font-size: .4rem; 
  }

`