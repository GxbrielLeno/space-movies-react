import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
width:100%;
height: 100vh;

.movieBG {
    display:flex;
    background-repeat: no-repeat;
    background-position: center;
    width: 110vh;
    background-size: cover;
    border-radius: 16px;
    display:block;
    font-family: "League Spartan";
    text-align: center;
    align-self: center;
}
.movie {
    background-color:#000000a8;
    display: flex;
    border-radius: 16px;
    align-items: center;
    box-shadow: 1px 1px 30px 5px black;
}

h1 {
    display:flex;
    margin:16px;
    align-self: center;
    color: white;
}

.release-date {
    font-size: 100%;
    opacity: 0.5;
    margin-top:5%;
    align-self: center
}

.imgdetails {
    width: 23%;
    height: 40%;
    border-radius: 16px;
    margin:26px
}

span {
    font-weight: normal;
    font-size: 120%;
    margin-bottom: 1rem;
    line-height: 130%;
    color:white;
    margin:14px;
    align-self: center;
}

button {
    background-color: #ff0000;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    font-size: 100%;
    transition: all .3s;
    font-family: "League Spartan";
  }
  button:hover {
    background-color: #ff0000;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 50%;
  }
`;