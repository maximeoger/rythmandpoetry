import styled from 'styled-components'

const Sedgwick = `autocomplete`

export const SedgwickSection = styled.section`

    width: 80vw;  
    margin: 100px auto;
    color: #fff;

    & .heading h2 {
        text-transform: uppercase;
        font-family: 'Montserrat' Arial, Helvetica, sans-serif;
        font-style: italic;
        font-weight: 800;
        line-height: 60px;
        font-size: 48px;
    }

`

export const SedgwickContent = styled.div`

    width: 50%;
    margin-left: ${ props => props.alignLeft ? '' : '50%' };

    & p {
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        font-style: italic;
        font-weight: 500;
        line-height: 36px;
        font-size: 24px;
    }

    & img {
        width: 100%;
    }


    @media only screen and (max-width: 768px) {

        width: 100%;

    }


`