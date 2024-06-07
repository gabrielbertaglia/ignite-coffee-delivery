import styled from 'styled-components'

// @media screen and (max-width: 1200px) {

// }
// @media screen and (max-width: 900px) {

// }

export const Intro = styled.section`
  display: flex;
  padding: 5.75rem 0;

  gap: 56px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    padding: 5.75/2rem 0;

    img {
      max-width: 400px;
      max-height: 400px;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;

    img {
      display: none;
    }
  }
`

export const IntroContainer = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: start;

  @media screen and (max-width: 900px) {
    align-self: center;
  }

  svg {
    padding: 8px;
    border-radius: 100%;
  }
  > div {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }
`

// Main

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  padding-bottom: 9.813rem;
`

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px 32px;
  padding-top: 54px;

  @media screen and (max-width: 1200px) {
    // Monitor
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 900px) {
    // Tablet
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    // Mobile
    grid-template-columns: 1fr;
  }
`
