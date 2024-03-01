Feature: Filtrar os jogos

    Como um usuário
    Desejo filtrar os jogos a serem mostrados
    Para que seja possível mostrar jogos de meu interesse

    Scenario: Filtrando por ano
        Given : Entro na página incial da aplicação
        And : Sou redirecionado para a home
        When : Eu interajo com a ferramente de filtro
        And : Eu digito o ano '2022' e clico em filtrar 
        Then : Vejo que todos os jogos que aparecem são de 2022

    Scenario: Filtrando por plataforma
        Given : Entro na página incial da aplicação
        And : Sou redirecionado para a home
        When : Eu interajo com a ferramente de filtro
        And : Eu escolho a plataforma 'Windows' e clico em filtrar
        Then : Vejo que todos os jogos que aparecem rodam em Windows
    Scenario: Filtrando por categoria
        Given : Entro na página incial da aplicação
        And : Sou redirecionado para a home
        When : Eu interajo com a ferramente de filtro
        And : Eu escolho a categoria 'MMORPG' e clico em filtrar
        Then : Vejo que todos os jogos que aparecem são 'MMORPG'
    Scenario: Filtrando por desenvolvedora
        Given : Entro na página incial da aplicação
        And : Sou redirecionado para a home
        When : Eu interajo com a ferramente de filtro
        And : Eu escolho a desenvolvedora 'Blizzard Entretainment' e clico em filtrar
        Then : Vejo que todos os jogos que aparecem são da 'Blizzard Entretainment'
