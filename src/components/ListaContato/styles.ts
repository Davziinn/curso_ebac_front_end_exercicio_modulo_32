import styled from 'styled-components'

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 16px;

    strong {
        font-size: 18px;
        color: #333;
    }

    span {
        color: #666;
        font-size: 14px;
    }
`

export const Button = styled.button`
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4b4b;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.5);
    }
`
