import styled from 'styled-components'

export const Player = styled.div`
    display: flex;
    flex-wrap: wrap;

    padding: 25px;
    background-color: rgba(0, 0, 0, .3);
`

export const PlayerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    border-radius: 100%;
    border: solid #000 2px;
    cursor: pointer;
`

export const Controls = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 110px;

    & span {
        cursor: pointer;
    }
`

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export const ProgressBarContainer = styled.div`
    width: 150px;
    height: 3px;

    background-color: grey;
    border-radius: 5px;

    overflow: hidden;
`

export const ProgressBar = styled.div`
    background-color: #b31217;
    transition: width 0.5s ease;
    height: 100%;
`