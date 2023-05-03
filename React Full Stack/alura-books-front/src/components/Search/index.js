import { useEffect, useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';
import { getLivros } from '../../services/livros';
import { postFavorito } from '../../services/favoritos';

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 500px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    
    p {
        width: 200px;
    }
    
    img {
        width: 100px;
    }
    
    &:hover {
        border: 1px solid white;
    }
`

function Search() {

    const [researchedBooks, setResearchedBooks] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [])

    async function fetchBooks() {
        const booksAPI = await getLivros();
        setBooks(booksAPI);
    }

    async function insertFavorite(id) {
        await postFavorito(id)
        alert(`Livro de id:${id} inserido!`)
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={ evento => {
                    const textTyped = evento.target.value
                    const resultSearch = books.filter( book => book.nome.includes(textTyped))
                    setResearchedBooks(resultSearch)
                }}
            />
            { researchedBooks.map( book => (
                <Result onClick={() => insertFavorite(book.id)}>
                    { book.src ? <img src={book.src} alt='Imagem livro recomendado'></img> : '' }
                    <p>{book.nome}</p>
                </Result>
            ))}
        </SearchContainer>
    );
}

export default Search;