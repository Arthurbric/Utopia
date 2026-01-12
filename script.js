/* ==========================================================================
   1. BANCO DE DADOS (LISTA COMPLETA)
   ========================================================================== */
const gamesData = [
    { id: 1, name: "13 Clues", difficulty: "Fácil", time: "25-40 min", players: "2-6", category: "Dedução", image: "https://m.media-amazon.com/images/I/91qnMFwpuaL.jpg", video: "https://youtu.be/MZOYfGq1Nco?si=lNOaOzEUo0yJjpjN", desc: "Descubra o assassino, a arma e o local do crime interrogando os outros jogadores." },
    { id: 2, name: "7 Wonders", difficulty: "Médio", time: "30-45 min", players: "2-7", category: "Estratégia", image: "https://m.media-amazon.com/images/I/71O7XttmO0L.jpg", video: "https://youtu.be/G81fQ5WhJuE?si=nnuUha72Rax82luO", desc: "Lidere uma das sete grandes cidades do mundo antigo e construa uma maravilha arquitetônica." },
    { id: 3, name: "Above and Below", difficulty: "Médio", time: "90 min", players: "2-4", category: "Aventura", image: "https://m.media-amazon.com/images/I/71ulMWNS7BL.jpg", video: "https://youtu.be/S-Uu8bK8rGs?si=yBllt0xnDtjqxAoc", desc: "Construa sua vila na superfície e explore cavernas subterrâneas em um livro de histórias." },
    { id: 4, name: "Arboretum", difficulty: "Médio", time: "25-30 min", players: "2-4", category: "Cartas", image: "https://i0.wp.com/whatsericplaying.com/wp-content/uploads/2018/09/featured-photo10.jpg?fit=1200%2C800&ssl=1", video: "https://youtu.be/-7YYGbuK3Ig?si=JxzITnKae_DtRv_7", desc: "Crie o caminho mais belo no seu jardim, mas lembre-se de manter cartas na mão para pontuar." },
    { id: 5, name: "AVALON", difficulty: "Fácil", time: "30 min", players: "5-10", category: "Party Game", image: "https://bizweb.dktcdn.net/100/523/080/products/avalon-box-mockup-4-l.jpg?v=1750301714380", video: "https://youtu.be/bHfAWAoyQv8?si=_oLlrHc2whCkJBgr", desc: "As forças do bem e do mal se enfrentam em uma batalha de dedução e identidades secretas." },
    { id: 6, name: "Ave Caesar", difficulty: "Fácil", time: "45 min", players: "3-6", category: "Corrida", image: "https://paizinhovirgula.com/wp-content/uploads/2022/03/Ave-Caesar-3.jpg", video: "https://youtu.be/QmMTW6vd6cY?si=QlwJWPaibIL5Wz-S", desc: "Uma corrida de bigas no Coliseu romano. Bloqueie oponentes e gerencie suas cartas." },
    { id: 7, name: "Azul: Master Chocolatier", difficulty: "Fácil", time: "30-45 min", players: "2-4", category: "Abstrato", image: "https://m.media-amazon.com/images/I/71xiDpsCyhL._AC_UF350,350_QL80_.jpg", video: "https://youtu.be/ow-62FZyEKA?si=UWjcRbHPGXF9FxWj", desc: "Edição especial do clássico Azul. Organize os chocolates mais finos para vencer." },
    { id: 8, name: "Azul: Summer Pavilion", difficulty: "Fácil", time: "30-45 min", players: "2-4", category: "Abstrato", image: "https://cdn.cs.1worldsync.com/65/b7/65b70ab4-1a6d-4dd0-8077-d2ab1eba4187.jpg", video: "https://youtu.be/3p5p2ZK6-p4?si=jviBdTKj0j_U__Bi", desc: "Construa o pavilhão de verão do Rei Manuel I com as peças mais belas de Portugal." },
    { id: 9, name: "Bandido", difficulty: "Muito Fácil", time: "15 min", players: "1-4", category: "Cooperativo", image: "https://www.boardgamequest.com/wp-content/uploads/2018/08/Bandido-Game-Experience.jpg", video: "https://youtu.be/XVwPRN1ebDc?si=54wt5w5RqbftNCga", desc: "Impeça o bandido de escapar fechando todos os túneis. Jogo rápido e cooperativo." },
    { id: 10, name: "Bad Company", difficulty: "Médio", time: "30-60 min", players: "1-4", category: "Estratégia", image: "https://m.media-amazon.com/images/I/51JLS0hcV7L.jpg", video: "https://www.youtube.com/live/THhcwxFyspo?si=R8sBrkt0EW8sW29s", desc: "Monte sua gangue, complete assaltos e fuja da polícia neste jogo dinâmico." },
    { id: 11, name: "Barony", difficulty: "Médio", time: "45 min", players: "2-4", category: "Estratégia", image: "https://paladinsgames.com.br/uploads/produto_fotos/20180801173129_jogo2.jpg", video: "https://youtu.be/jSB94SDbV0A?si=NUoSb9p6ym4Vgi1x", desc: "Expanda seu domínio, recrute cavaleiros e torne-se o novo rei neste jogo de controle de área." },
    { id: 12, name: "Between Two Cities", difficulty: "Fácil", time: "25 min", players: "3-7", category: "Estratégia", image: "https://boardgamereview.co.uk/wp-content/uploads/2023/04/Between-Two-Cities-Essential-Edition-Hand-of-Tiles.png", video: "https://youtu.be/cStmn1BNPYc?si=KVLnn5QgJpLGlP1G", desc: "Trabalhe com os vizinhos à sua esquerda e direita para construir duas cidades simultaneamente." },
    { id: 13, name: "Bullfrogs", difficulty: "Médio", time: "20-40 min", players: "2-4", category: "Estratégia", image: "https://i.kickstarter.com/assets/011/602/944/580d45c9e16f0c519822ce067830e46b_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&v=1463685206&width=1552&sig=rr9gmDfHCo%2BGsMEkEkT7fv9RENtd%2FG5pPI5C%2B5tYOcA%3D", video: "https://youtu.be/cBnU4luMjSc?si=lfZdDZMBMPR2sOU5", desc: "Batalha tática de sapos por vitórias-régias no lago. Simples, mas profundo." },
    { id: 14, name: "Cai Não Cai", difficulty: "Muito Fácil", time: "10-15 min", players: "2+", category: "Infantil", image: "https://cdn.awsli.com.br/600x1000/2624/2624370/produto/251209414/jogo-cai-nao-cai-estrela-alternativa-brinquedos-capa-cieid3n9y6.png", video: "https://youtu.be/oXBWMbmrGJU?si=Cpti98x612A4IAPF", desc: "Tire as varetas sem deixar as bolinhas caírem. Um clássico de destreza." },
    { id: 15, name: "Carcassonne", difficulty: "Fácil", time: "30-45 min", players: "2-5", category: "Entrada", image: "https://assetsio.gnwcdn.com/carcassone-layout-image-adobe-4-oliver-foerstner.png?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp", video: "https://youtu.be/ziUn9vDJlO0?si=w0JXGcX9ha3M8Ept", desc: "Construa cidades, estradas e mosteiros na França medieval, peça por peça." },
    { id: 16, name: "Welcome To...", difficulty: "Fácil", time: "25 min", players: "1-100+", category: "Flip & Write", image: "https://m.media-amazon.com/images/I/71Iw4UjlrJL.jpg", video: "https://youtu.be/SLeTu5q9XSs?si=_0kutJKXs-GEuy69", desc: "Seja um arquiteto nos EUA dos anos 50. Desenhe e numere as casas do seu subúrbio." },
    { id: 17, name: "Uno", difficulty: "Muito Fácil", time: "15-30 min", players: "2-10", category: "Cartas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHuW4ACY_i6eOFlgb-XDb8dZQY3md9wYk7Q&s", video: "https://youtu.be/zQ-AF3Mi_JA?si=LZpJMq5fJzWSV_2D", desc: "Livre-se de suas cartas combinando cores e números, e use cartas de ação contra amigos." },
    { id: 18, name: "Dobble", difficulty: "Muito Fácil", time: "15 min", players: "2-8", category: "Party Game", image: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v2625089578246142003/products/DOB101_OCC.png", video: "https://youtu.be/6UpW8dV2Oks?si=GO7No2aWuik12oSo", desc: "Teste seus reflexos encontrando o único símbolo em comum entre duas cartas." },
    { id: 19, name: "Coup", difficulty: "Fácil", time: "15 min", players: "2-6", category: "Bluff", image: "https://images.tcdn.com.br/img/img_prod/1018249/coup_205_2_928c7fa04b7442c7d1c7448c21985572_20220221230637.jpg", video: "https://youtu.be/6UpW8dV2Oks?si=bY_DCI21YRwRFNSj", desc: "Blefe, suborne e manipule para ser o último sobrevivente na corte corrupta." },
    { id: 20, name: "Bang!", difficulty: "Fácil", time: "20-40 min", players: "4-12", category: "Faroeste", image: "https://m.media-amazon.com/images/I/91dv+0CMVDL.jpg", video: "https://youtu.be/X_pULD3bA58?si=NqDUwPJbvIjtwVd5", desc: "Xerife, Foras-da-lei e Renegado trocam tiros no Velho Oeste. Quem é quem?" },
    { id: 21, name: "Bang!: The Dice Game", difficulty: "Fácil", time: "15 min", players: "3-8", category: "Dados", image: "https://corners.ge/wp-content/uploads/2021/11/Bang-3-1.jpg", video: "https://youtu.be/WvXrJUbXeyo?si=7n6I4Sc_0xFHyxCv", desc: "Versão de dados, mais rápida e caótica do clássico Bang!." },
    { id: 22, name: "War Cards", difficulty: "Fácil", time: "20-30 min", players: "2-4", category: "Cartas", image: "https://uploads.comparajogos.com.br/img/60f8cb6949acfb824b0bc1fcdf2c349124d55202.jpg", video: "https://youtu.be/ZyBfssS8wDY?si=OWQD4Tv3BUASLje0", desc: "A estratégia do War clássico adaptada para um jogo de cartas rápido e dinâmico." },
    { id: 23, name: "CATAN", difficulty: "Médio", time: "60-120 min", players: "3-4", category: "Clássico", image: "https://images.theconversation.com/files/567624/original/file-20240102-19-2tzi0o.jpg?ixlib=rb-4.1.0&rect=30%2C15%2C5106%2C3404&q=50&auto=format&w=768&h=512&fit=crop&dpr=2", video: "https://youtu.be/ohqeVmFNp5U?si=yTm6Myt_VzIqm76s", desc: "Negocie recursos (madeira, trigo, ovelha) e colonize a ilha de Catan." },
    { id: 24, name: "Chaos in the Old World", difficulty: "Difícil", time: "90-120 min", players: "3-4", category: "Expert", image: "https://www.blackgate.com/wp-content/uploads/2018/02/Chaos-in-the-Old-World-board-pieces.jpg", video: "https://youtu.be/7lTS0QClf8Q?si=z2eHtDzilzKOxpA6", desc: "Assuma o papel de um Deus do Caos tentando corromper o Velho Mundo." },
    { id: 25, name: "Checkpoint Charlie", difficulty: "Fácil", time: "20-30 min", players: "2-5", category: "Dedução", image: "https://images.tcdn.com.br/img/img_prod/558884/checkpoint_charlie_jogo_de_tabuleiro_devir_bgcheckpt_888866974_2_a966fdc7d6595d7446f76516247d1173.jpeg", video: "https://youtu.be/MxGYIPvAudY?si=n9mjOpoVWkbnPb_o", desc: "Cães detetives tentam identificar o espião mestre na Guerra Fria." },
    { id: 26, name: "Chronicles of Crime", difficulty: "Fácil", time: "60-90 min", players: "1-4", category: "Investigação", image: "https://m.media-amazon.com/images/I/81R66WYqaIL.jpg", video: "https://youtu.be/gnU-ID4WRiE?si=Y1l1qjCxKLJm6v8N", desc: "Mistura jogo de tabuleiro e realidade virtual. Investigue cenas de crime com o celular." },
    { id: 27, name: "CONCEPT", difficulty: "Fácil", time: "40 min", players: "4-12", category: "Party Game", image: "https://m.media-amazon.com/images/I/71K9-3LgVzL.jpg", video: "https://youtu.be/qsPSSBzJlXI?si=gGlqyN99H8ohsPEO", desc: "Adivinhe palavras e frases associando ícones no tabuleiro. Criatividade pura." },
    { id: 28, name: "Conspiracy", difficulty: "Fácil", time: "30-45 min", players: "2-4", category: "Cartas", image: "https://67287.cdn.simplo7.net/static/67287/sku/jogos-de-tabuleiro-e-cardgames-conspiracy-abyss-universe--p-1629123086134.jpg", video: "https://youtu.be/dITz86J3q9w?si=DmtthDAmiWQsG0e5", desc: "No universo de Abyss, recrute lordes e organize o senado submarino." },
    { id: 29, name: "Dedín!", difficulty: "Muito Fácil", time: "10-15 min", players: "2-6", category: "Party Game", image: "https://i.ytimg.com/vi/iluFLG0yN_4/mqdefault.jpg", video: "https://youtu.be/fK0ZVxr1KLA?si=_4X1eJLEWcHZhl6-", desc: "Jogo de agilidade e reação para testar quem tem o dedo mais rápido." },
    { id: 30, name: "Detective", difficulty: "Médio", time: "120-180 min", players: "1-5", category: "Investigação", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cd31NvKAySmIFbdIYxHG9X8ecGvYrBWEqQ&s", video: "https://youtu.be/i3HM-TbGH5Q?si=wYqp6skPud3JYIr-", desc: "Resolva crimes complexos usando um banco de dados online real e dedução." },
    { id: 31, name: "Dig In", difficulty: "Muito Fácil", time: "10 min", players: "2-4", category: "Infantil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5w4dOSFxSL0k8xbKSaz8gHMddzTX_lKEg0w&s", video: "https://www.youtube.com/watch?v=D7Y6qJd_PkM&pp=ygURRGlnIEluIGNvbW8gam9nYXI%3D", desc: "Escave em uma piscina de peças para encontrar os objetos da sua carta." },
    { id: 32, name: "Dominations", difficulty: "Difícil", time: "75-120 min", players: "2-4", category: "Expert", image: "https://i0.wp.com/whatsericplaying.com/wp-content/uploads/2021/03/featured-photo-9.jpg?fit=1200%2C800&ssl=1&w=640", video: "https://www.youtube.com/watch?v=-wtfNCwFyqc&pp=ygUWRG9taW5hdGlvbnMgY29tbyBqb2dhcg%3D%3D", desc: "Construa uma civilização usando dominós triangulares e árvores de tecnologia." },
    { id: 33, name: "Don Capollo", difficulty: "Médio", time: "60-90 min", players: "3-5", category: "Estratégia", image: "https://www.ludopedia.com.br/uploads/01/099/sbyvv0.jpg", video: "https://www.youtube.com/watch?v=sfgl9jyjP_E&pp=ygUWRG9uIENhcG9sbG8gY29tbyBqb2dhcg%3D%3D", desc: "Gerencie os negócios da máfia e torne-se o novo Chefão." },
    { id: 34, name: "Draftosaurus", difficulty: "Fácil", time: "15 min", players: "2-5", category: "Familiar", image: "https://acdn-us.mitiendanube.com/stores/163/751/products/pic46359201-5b1528484072e1daf815917260780672-1024-1024.webp", video: "https://www.youtube.com/watch?v=y2ns_10lPC8&pp=ygUXRHJhZnRvc2F1cnVzIGNvbW8gam9nYXI%3D", desc: "Passe dinossauros de mão em mão e organize o melhor parque jurássico." },
    { id: 35, name: "Drako: Dragon & Dwarves", difficulty: "Fácil", time: "15-30 min", players: "2", category: "Dois Jogadores", image: "https://http2.mlstatic.com/D_Q_NP_929711-MLU72889593446_112023-O.webp", video: "https://www.youtube.com/watch?v=42q0CGkO3a8&pp=ygUiRHJha286IERyYWdvbiAmIER3YXJ2ZXMgY29tbyBqb2dhcg%3D%3D", desc: "Um jogador controla um dragão furioso, o outro, três anões caçadores." },
    { id: 36, name: "DUNA", difficulty: "Difícil", time: "120-180 min", players: "2-6", category: "Expert", image: "https://m.media-amazon.com/images/I/91NzaPjBwzL._AC_UF894,1000_QL80_.jpg", video: "https://www.youtube.com/watch?v=tRlqjDlMcnc&pp=ygUPRHVuYSBjb21vIGpvZ2Fy", desc: "Jogo épico de diplomacia, traição e controle da especiaria em Arrakis." },
    { id: 37, name: "Tyrants of the Underdark", difficulty: "Médio", time: "60-90 min", players: "2-4", category: "Estratégia", image: "https://m.media-amazon.com/images/S/aplus-media/vc/84cae5fd-6c15-4172-a759-59522c2afc52.__CR0,0,300,300_PT0_SX300_V1___.png", video: "https://www.youtube.com/watch?v=tQmTRJYrnJU&pp=ygUjVHlyYW50cyBvZiB0aGUgVW5kZXJkYXJrIGNvbW8gam9nYXI%3D", desc: "Dungeons & Dragons: Deck building e controle de área no mundo dos Drow." },
    { id: 38, name: "Flotilla", difficulty: "Difícil", time: "90-150 min", players: "3-5", category: "Expert", image: "https://images.tcdn.com.br/img/img_prod/558884/flotilla_jogo_de_tabuleiro_galapagos_flo001_888874405_2_6454a781ca7fa416f00c17a6fb21fb85.jpg", video: "https://www.youtube.com/watch?v=xlSlxGhHuYo&pp=ygUTRmxvdGlsbGEgY29tbyBqb2dhcg%3D%3D", desc: "Comande uma frota num mundo pós-apocalíptico inundado. Economia complexa." },
    { id: 39, name: "Holmes: Sherlock & Mycroft", difficulty: "Fácil", time: "20-30 min", players: "2", category: "Dois Jogadores", image: "https://ludosaurus.com/5797-large_default/holmes-sherlock-mycroft.jpg", video: "https://www.youtube.com/watch?v=ZADXyhYaerc&pp=ygUlSG9sbWVzOiBTaGVybG9jayAmIE15Y3JvZnQgY29tbyBqb2dhcg%3D%3D", desc: "Duelo de mentes entre os irmãos Holmes durante uma investigação." },
    { id: 40, name: "Flourish", difficulty: "Fácil", time: "20-60 min", players: "1-7", category: "Cartas", image: "https://dungeonmarvels.com/135697-large_default/flourish-signature-edition.jpg", video: "https://www.youtube.com/watch?v=NDHmZLbN0TA&pp=ygUTRmxvdXJpc2ggY29tbyBqb2dhcg%3D%3D", desc: "Crie o jardim mais impressionante passando cartas para os vizinhos." },
    { id: 41, name: "For Sale", difficulty: "Fácil", time: "20-30 min", players: "3-6", category: "Leilão", image: "https://m.media-amazon.com/images/I/81AvlxH3BAL._AC_UF350,350_QL80_.jpg", video: "https://www.youtube.com/watch?v=1P0VycIBHys&pp=ygUTRm9yIFNhbGUgY29tbyBqb2dhcg%3D%3D", desc: "Compre casas pelo menor preço e venda pelo maior lucro. Rápido e inteligente." },
    { id: 42, name: "Forbidden Island", difficulty: "Fácil", time: "30 min", players: "2-4", category: "Cooperativo", image: "https://m.media-amazon.com/images/I/81dLQJZRx5L.jpg", video: "https://www.youtube.com/watch?v=_4ocxmGJUSg&pp=ygUbRm9yYmlkZGVuIElzbGFuZCBjb21vIGpvZ2Fy", desc: "Recupere tesouros de uma ilha que está afundando a cada turno." },
    { id: 43, name: "Friday the 13th", difficulty: "Fácil", time: "15-30 min", players: "3-6", category: "Party Game", image: "https://cf.geekdo-images.com/Y17KkXo0-uOa5c_L6Y392g__itemrep/img/P-7J5WkM995-1Y8q634458421b4=/fit-in/246x300/filters:strip_icc()/pic1347076.jpg", video: "https://www.youtube.com/watch?v=Nj5aykcvZnc&pp=ygUlRnJpZGF5IHRoZSAxM3RoIGJvcmQgZ2FtZSBob3cgdG8gcGxheQ%3D%3D", desc: "Evite o azar e as maldições neste jogo divertido de cartas." },
    { id: 44, name: "Guerra dos Tronos", difficulty: "Difícil", time: "180-240 min", players: "3-6", category: "Expert", image: "https://m.media-amazon.com/images/I/A105putUJ4L.jpg", video: "https://www.youtube.com/watch?v=b6608n25-6M&pp=ygUoR3VlcnJhIGRvcyBUcm9ub3MgYm9hcmQgZ2FtZSBob3cgdG8gcGxheQ%3D%3D", desc: "Comande os exércitos de Westeros. Alianças são feitas para serem quebradas." },
    { id: 45, name: "Kingdomino Duel", difficulty: "Fácil", time: "15-20 min", players: "2", category: "Dois Jogadores", image: "https://images.tcdn.com.br/img/img_prod/558884/kingdomino_duel_jogo_de_dados_papergames_j039_888871689_2_cf4661aa26f421ac825ab6fa3422838e.jpg", video: "https://www.youtube.com/watch?v=tEvoCdERYnE&pp=ygUbS2luZ2RvbWlubyBEdWVsICBjb21vIGpvZ2Fy", desc: "Versão de dados do Kingdomino. Construa seu reino e dispute poderes mágicos." },
    { id: 46, name: "Quarriors!", difficulty: "Médio", time: "30-60 min", players: "2-4", category: "Dados", image: "https://m.media-amazon.com/images/I/51eQk97m7-L._SL300_.jpg", video: "https://www.youtube.com/watch?v=83iUnNvh4bo&pp=ygUbUXVhcnJpb3JzISBEdWVsICBjb21vIGpvZ2Fy", desc: "Construção de 'deck' usando dados. Invoque criaturas e lance feitiços." },
    { id: 47, name: "Love Letter", difficulty: "Fácil", time: "20 min", players: "2-6", category: "Cartas", image: "https://cdn.svc.asmodee.net/production-zman/uploads/2024/09/ZLL01_Lifestyle-01-1-1024x682.png", video: "https://youtu.be/RiQ2To5KWJM?si=TtZf3y0M3tc8Wsxj", desc: "Arrisque tudo para entregar sua carta à princesa. Minimalista e genial." },
    { id: 48, name: "Luna", difficulty: "Difícil", time: "60-100 min", players: "1-4", category: "Estratégia", image: "https://www.thegamesteward.com/cdn/shop/products/luna-deluxified-plus-metal-coins-kickstarter-pre-order-special-kickstarter-board-game-hall-games-5691694743596.jpg?v=1569333424&width=800", video: "https://www.youtube.com/watch?v=9ZL5Lbmc9Ko&pp=ygUPTHVuYSBjb21vIGpvZ2Fy", desc: "Gerencie noviças e construa santuários para se tornar a nova Sacerdotisa da Lua." },
    { id: 49, name: "Manopla do Infinito", difficulty: "Fácil", time: "15 min", players: "2-6", category: "Cartas", image: "https://m.media-amazon.com/images/I/81+22V-79PL._AC_UF894,1000_QL80_.jpg", video: "https://youtu.be/Ap9FEEa0Tz4?si=2H6CBwVxc56DMJ5k", desc: "Baseado em Love Letter. Um joga como Thanos, os outros como heróis da Marvel." },
    { id: 50, name: "My City", difficulty: "Fácil", time: "30 min", players: "2-4", category: "Legacy", image: "https://i.ytimg.com/vi/Gmj0iI8vaZo/maxresdefault.jpg", video: "https://www.youtube.com/watch?v=MONhvQcc160&pp=ygURbXljaXR5IGNvbW8gam9nYXI%3D", desc: "Um jogo legacy (evolutivo) de construção de cidades com tetris (poliminós)." },
    { id: 51, name: "Optimus (Ganz Schön Clever)", difficulty: "Fácil", time: "30 min", players: "1-4", category: "Roll & Write", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aIuCWSMebJC5GkJQ5xT-ZCzbWQOtkE9Iqw&s", video: "https://www.youtube.com/watch?v=bdoUNt00oA4&pp=ygUnT3B0aW11cyAoR2FueiBTY2jDtm4gQ2xldmVyKSBjb21vIGpvZ2Fy", desc: "Role dados e preencha sua planilha fazendo combos inteligentes." },
    { id: 52, name: "Paris", difficulty: "Médio", time: "90-120 min", players: "2-4", category: "Estratégia", image: "https://cf.geekdo-images.com/K67Y949x-0Y4X744434234__itemrep/img/14133454352345.jpg", video: "https://www.youtube.com/watch?v=LpWEDLlC9NA&pp=ygUQUGFyaXMgY29tbyBqb2dhcg%3D%3D", desc: "Invista em imóveis e monumentos na Paris da Belle Époque." },
    { id: 53, name: "Power Grid", difficulty: "Difícil", time: "120 min", players: "2-6", category: "Expert", image: "https://acdn-us.mitiendanube.com/stores/140/298/products/pwg001_3d-box_800px1-414fe5b8879ee4a26d15579639139496-480-0.webp", video: "https://www.youtube.com/watch?v=x0r2Vngadjw&pp=ygUVUG93ZXIgR3JpZCBjb21vIGpvZ2Fy", desc: "Leilão de usinas e gestão de recursos para energizar cidades." },
    { id: 54, name: "Quartermaster General", difficulty: "Médio", time: "90-120 min", players: "2-6", category: "Wargame", image: "https://cf.geekdo-images.com/Zk0-8p1ycsumFeXgAz1LZw__itemrep/img/pFbMx2JnBb8aqF26mBLNhbSU-k8=/fit-in/246x300/filters:strip_icc()/pic2020915.jpg", video: "https://www.youtube.com/watch?v=TuAqK2GZIgg&pp=ygUgUXVhcnRlcm1hc3RlciBHZW5lcmFsIGNvbW8gam9nYXI%3D", desc: "Simulação da 2ª Guerra focada em logística e abastecimento das tropas." },
    { id: 55, name: "Rajas of the Ganges", difficulty: "Médio", time: "45-75 min", players: "2-4", category: "Estratégia", image: "https://rnrgames.com/images/thumbs/0001801_rajas-of-the-ganges-ding-dent.jpeg", video: "https://www.youtube.com/watch?v=HzjJdTDxWoA&pp=ygUeUmFqYXMgb2YgdGhlIEdhbmdlcyBjb21vIGpvZ2Fy", desc: "Desenvolva sua província na Índia usando dados como trabalhadores." },
    { id: 56, name: "Reavers of Midgard", difficulty: "Médio", time: "60-120 min", players: "2-4", category: "Estratégia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qlezlM-hg6pEuIeie_gkMNpG9_z_-fcfEg&s", video: "https://www.youtube.com/watch?v=X78AYWcG6pg&pp=ygUdcmVhdmVycyBvZiBtaWRnYXJkIGNvbW8gam9nYXI%3D", desc: "Lidere um bando de vikings em busca de glória, pilhagem e batalhas." },
    { id: 57, name: "Res Arcana", difficulty: "Médio", time: "30-60 min", players: "2-4", category: "Estratégia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZnZP45FkcKv45W01k53IbqQViNamM_CThmg&s", video: "https://www.youtube.com/watch?v=LMb-Zg7M5Fs&pp=ygUVUmVzIEFyY2FuYSBjb21vIGpvZ2Fy", desc: "Magos competem por poder. Crie combos poderosos com um baralho pequeno." },
    { id: 58, name: "Rolling Realms", difficulty: "Fácil", time: "30 min", players: "1-6", category: "Roll & Write", image: "https://cf.geekdo-images.com/3943890214890.jpg", video: "https://www.youtube.com/watch?v=XBlIRzh3FFo&pp=ygUYUmVzIEFyY2FuYSBjb21vIGpvZ2Fy", desc: "Minigames baseados em jogos famosos da Stonemaier Games." },
    { id: 59, name: "San Juan", difficulty: "Fácil", time: "30-45 min", players: "2-4", category: "Cartas", image: "https://cf.geekdo-images.com/1231234.jpg", video: "https://www.youtube.com/watch?v=F0eOdK26T1E&pp=ygUTU2FuIEp1YW4gY29tbyBqb2dhcg%3D%3D", desc: "A versão de cartas de Puerto Rico. Produza bens e construa prédios." },
    { id: 60, name: "Senhor dos Anéis: Card Game", difficulty: "Difícil", time: "30-90 min", players: "1-2", category: "Cooperativo", image: "https://cf.geekdo-images.com/image.jpg", video: "https://www.youtube.com/watch?v=sxjdw-t449M&pp=ygUnU2VuaG9yIGRvcyBBbsOpaXM6IENhcmQgR2FtZSBjb21vIGpvZ2Fy", desc: "Monte seu baralho e enfrente cenários perigosos na Terra Média." },
    { id: 61, name: "Sheriff of Nottingham", difficulty: "Fácil", time: "60 min", players: "3-5", category: "Bluff", image: "https://images.tcdn.com.br/img/img_prod/558884/sheriff_of_nottingham_2a_edicao_jogo_de_tabuleiro_galapagos_son101_888872357_2_cfc17ad8bce5be7385d358266d81ba1d.jpg", video: "https://www.youtube.com/watch?v=GbO9UxYsSpY&pp=ygUlU2hlcmlmZiBvZiBOb3R0aW5naGFtIEdhbWUgY29tbyBqb2dhcg%3D%3D", desc: "Tente passar contrabando pelo xerife ou suborne-o para olhar para o outro lado." },
    { id: 62, name: "Sobek: 2 Players", difficulty: "Fácil", time: "20 min", players: "2", category: "Dois Jogadores", image: "https://m.media-amazon.com/images/I/71BBmkeIQBL._AC_UF350,350_QL80_.jpg", video: "https://www.youtube.com/watch?v=SP4KmE0gC9w&pp=ugMICgJlbhABGAHKBSBTb2JlazogMiBQbGF5ZXJzIEdhbWUgY29tbyBqb2dhcg%3D%3D", desc: "Colete mercadorias no mercado egípcio e evite a corrupção." },
    { id: 63, name: "Stacko (Jenga)", difficulty: "Muito Fácil", time: "5-15 min", players: "2+", category: "Destreza", image: "https://rihappy.vtexassets.com/arquivos/ids/3136931/100001866_1.jpg?v=637872832190300000", video: "https://youtu.be/OM93hs58KbE?si=oVBI-fJYFlGA5bDe", desc: "O clássico Jenga com regras e cores do UNO. Cuidado para não derrubar!" },
    { id: 64, name: "Stone Age", difficulty: "Médio", time: "60-90 min", players: "2-4", category: "Estratégia", image: "https://images.tcdn.com.br/img/img_prod/502010/stone_age_803_1_8f952473bb17d687b4c0857cc18e3291.jpg", video: "https://www.youtube.com/watch?v=yfVm21WOJ7A&pp=ygUUU3RvbmUgQWdlIGNvbW8gam9nYXI%3D", desc: "Envie seus homens das cavernas para caçar, coletar madeira e evoluir." },
    { id: 65, name: "Rory's Story Cubes", difficulty: "Muito Fácil", time: "10-20 min", players: "1+", category: "Criatividade", image: "https://gamewright.com/images/twenty/GAMEWRIGHT-318.jpg", video: "https://www.youtube.com/watch?v=K_YJlJKQH5E&pp=ygUdUm9yeSdzIFN0b3J5IEN1YmVzIGNvbW8gam9nYXI%3D", desc: "Lance os dados e crie uma história baseada nas imagens que saírem." },
    { id: 66, name: "Stranger Things", difficulty: "Fácil", time: "20 min", players: "4-10", category: "Identidade Secreta", image: "https://i5.walmartimages.com/asr/7e41e6de-3be6-4f07-b75f-b0d28babb909.1b07f3164026c4931908a64412e3d928.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", video: "https://www.youtube.com/watch?v=j-KEo9P_q38&pp=ygUaU3RyYW5nZXIgVGhpbmdzIGNvbW8gam9nYXLSBwkJTQoBhyohjO8%3D", desc: "Attack of the Mind Flayer. Quem está possuído? Confie em ninguém." },
    { id: 67, name: "Tawantinsuyu", difficulty: "Difícil", time: "60-120 min", players: "1-4", category: "Expert", image: "https://cf.geekdo-images.com/3482348.jpg", video: "https://www.youtube.com/watch?v=q6AHNuhYv58&pp=ygUXVGF3YW50aW5zdXl1IGNvbW8gam9nYXLSBwkJTQoBhyohjO8%3D", desc: "Estratégia pesada no Império Inca. Gestão complexa de recursos e ações." },
    { id: 68, name: "The Mind", difficulty: "Muito Fácil", time: "15 min", players: "2-4", category: "Cooperativo", image: "https://cf.geekdo-images.com/123123.jpg", video: "https://www.youtube.com/watch?v=lQTZFfNJmPw&pp=ygUTVGhlIE1pbmQgY29tbyBqb2dhcg%3D%3D", desc: "Joguem cartas em ordem crescente. O detalhe? Ninguém pode falar nada." },
    { id: 69, name: "The Number", difficulty: "Fácil", time: "15-20 min", players: "3-5", category: "Bluff", image: "https://cf.geekdo-images.com/123412.jpg", video: "https://www.youtube.com/watch?v=8KjVNcSTQPE&t=32s&pp=ygUVVGhlIE51bWJlciBjb21vIGpvZ2Fy", desc: "Escreva um número. Se for igual ao de alguém, você perde. Risque e ganhe." },
    { id: 70, name: "Through the Desert", difficulty: "Fácil", time: "45 min", players: "2-5", category: "Estratégia", image: "https://allplay.com/images/biuv286z/production/09b4fd1fad8d52736819e2a20a78a813a33a6a7a-960x1440.webp", video: "https://www.youtube.com/watch?v=vA9pSaEWYZk&pp=ygUdVGhyb3VnaCB0aGUgRGVzZXJ0IGNvbW8gam9nYXI%3D", desc: "Posicione caravanas de camelos pastel para controlar oásis no deserto." },
    { id: 71, name: "Ticket to Ride: America", difficulty: "Fácil", time: "30-60 min", players: "2-5", category: "Familiar", image: "https://www.mundogalapagos.com.br/ccstore/v1/images/?source=/file/v479041922746464972/products/TTR001_3D-Box-01_OCC.png", video: "https://www.youtube.com/watch?v=pmHGhJdeHsA&pp=ygUiVGlja2V0IHRvIFJpZGU6IEFtZXJpY2EgY29tbyBqb2dhcg%3D%3D", desc: "Conecte cidades americanas com rotas de trem e complete seus objetivos." },
    { id: 72, name: "Twilight Inscription", difficulty: "Difícil", time: "90-120 min", players: "1-8", category: "Expert", image: "https://m.media-amazon.com/images/I/918T3mELmiL._AC_UF894,1000_QL80_.jpg", video: "https://www.youtube.com/watch?v=9qPVZ9vAFFQ&pp=ygUfVHdpbGlnaHQgSW5zY3JpcHRpb24gY29tbyBqb2dhcg%3D%3D", desc: "Versão Roll & Write épica do universo de Twilight Imperium." },
    { id: 73, name: "VIK-VIK Duelo", difficulty: "Fácil", time: "10-20 min", players: "2", category: "Dois Jogadores", image: "https://www.galaxcommerce.com.br/sistema/upload/4497/produtos/vik-vik-duelo-de-dados_2024-10-13_11-31-53_0_189.jpg", video: "", desc: "Duelo rápido de dados com tema viking." },
    { id: 74, name: "Voices in My Head", difficulty: "Médio", time: "60-120 min", players: "3-6", category: "Party Game", image: "https://images.tcdn.com.br/img/img_prod/558884/voices_in_my_head_jogo_de_tabuleiro_galapagos_vmh001_888875233_2_bac82776e938cb674d03fd924da96a7a.jpg", video: "https://www.youtube.com/watch?v=SWjfGnNwaLw&pp=ygUcVm9pY2VzIGluIE15IEhlYWQgY29tbyBqb2dhctIHCQlNCgGHKiGM7w%3D%3D", desc: "Um jogador é o promotor, os outros são as 'vozes' na cabeça do réu no tribunal." },
    { id: 75, name: "War II", difficulty: "Médio", time: "120-240 min", players: "2-6", category: "Wargame", image: "https://cdn.awsli.com.br/600x700/2640/2640978/produto/270791188/7908010117806_1-bm60b2690h.jpg", video: "https://www.youtube.com/watch?v=ikgxH_ljaQA&pp=ygURV0FSIElJIGNvbW8gam9nYXI%3D", desc: "O clássico War ambientado na Segunda Guerra Mundial." },
    { id: 76, name: "Zombicide: Rue Morgue", difficulty: "Médio", time: "60-180 min", players: "1-12", category: "Cooperativo", image: "https://images.tcdn.com.br/img/img_prod/558884/zombicide_rue_morgue_season_3_jogo_de_tabuleiro_galapagos_zom004_888867224_1_20200710203901.jpg", video: "https://www.youtube.com/watch?v=hMfQi183UNU&pp=ygUgWm9tYmljaWRlOiBSdWUgTW9yZ3VlIGNvbW8gam9nYXI%3D", desc: "Sobrevivência zumbi urbana. Muitas armas, cenários e mortos-vivos." }
];

/* ==========================================================================
   2. SELETORES E VARIÁVEIS GLOBAIS
   ========================================================================== */
const container = document.getElementById('games-container');
const searchInput = document.getElementById('search-input');
const playersInput = document.getElementById('players-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeBtn = document.getElementById('theme-toggle');
const favBtn = document.getElementById('fav-toggle');
const favModal = document.getElementById('fav-modal');
const favListEl = document.getElementById('fav-list');
const favCountEl = document.getElementById('fav-count');
const closeModal = document.querySelector('.close-modal');
const showingCountEl = document.getElementById('showing-count');
const modalTotalFavs = document.getElementById('modal-total-favs');
const backToTopBtn = document.getElementById('back-to-top'); // Novo botão
const suggestionBox = document.getElementById('suggestion-box'); // Nova caixa de sugestão

// Carrega favoritos do navegador ou inicia vazio
let favorites = JSON.parse(localStorage.getItem('utopiaFavorites')) || [];

/* ==========================================================================
   3. FUNÇÕES PRINCIPAIS
   ========================================================================== */

// --- Renderizar os Cards de Jogo na Tela ---
function renderGames(data) {
    container.innerHTML = '';
    
    // Atualiza o texto do topo
    if (showingCountEl) {
        showingCountEl.textContent = `A mostrar ${data.length} jogo(s)`;
    }

    // Mostra/Esconde a caixa de sugestão
    if (suggestionBox) {
        suggestionBox.style.display = 'block'; // Sempre mostra no final da lista
    }

    if (data.length === 0) {
        container.innerHTML = '<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center; padding: 40px; font-size: 1.2rem;">Nenhum jogo encontrado com estes filtros.</p>';
        return;
    }

    data.forEach(game => {
        // --- LÓGICA DE IMAGEM ---
        let imgSrc;
        if (game.image && game.image.trim() !== "") {
            imgSrc = game.image;
        } else {
            imgSrc = `https://ui-avatars.com/api/?name=${game.name.replace(/ /g, '+')}&background=FF8C00&color=fff&size=200&font-size=0.33`;
        }
        
        // --- LÓGICA DE VÍDEO ---
        const videoLink = game.video && game.video.trim() !== ""
            ? `<a href="${game.video}" target="_blank" class="btn-video"><i class="fab fa-youtube"></i> Ver Regras</a>` 
            : `<span class="btn-video" style="opacity:0.5; cursor: default;"><i class="fas fa-video-slash"></i> Sem vídeo</span>`;

        // Verifica se é favorito
        const isFav = favorites.includes(game.id) ? 'added' : '';

        // Define a cor da dificuldade
        let diffClass = 'medio';
        if(game.difficulty.toLowerCase().includes('fácil') || game.difficulty.toLowerCase().includes('muito fácil')) {
            diffClass = 'facil';
        } else if(game.difficulty.toLowerCase().includes('difícil')) {
            diffClass = 'dificil';
        }

        const html = `
            <div class="game-card">
                <img src="${imgSrc}" alt="${game.name}" class="game-image">
                <div class="game-info">
                    <div class="tags">
                        <span class="tag ${diffClass}">${game.difficulty}</span>
                        <span class="tag"><i class="far fa-clock"></i> ${game.time}</span>
                    </div>
                    <h3 class="game-title">${game.name}</h3>
                    <div class="game-meta">
                        <span><i class="fas fa-users"></i> ${game.players}</span>
                        <span>${game.category}</span>
                    </div>
                    <p class="game-desc">${game.desc}</p>
                    <div class="card-actions">
                        ${videoLink}
                        <button class="btn-add-fav ${isFav}" onclick="toggleFavorite(${game.id})" title="Adicionar aos Favoritos">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

// --- Filtragem Principal (Combina Categoria, Nome e Qtd. Jogadores) ---
function filterGames() {
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';

    let filtered = gamesData;

    // A. Filtro por Categoria (Botões)
    if (category === 'casais') {
        filtered = filtered.filter(g => parseInt(g.players.split('-')[0]) <= 2);
    } else if (category === 'facil') {
        filtered = filtered.filter(g => 
            g.difficulty.toLowerCase().includes('fácil') || g.difficulty.toLowerCase().includes('muito fácil')
        );
    } else if (category === 'medio') {
        filtered = filtered.filter(g => g.difficulty.toLowerCase().includes('médio'));
    } else if (category === 'dificil') {
        filtered = filtered.filter(g => g.difficulty.toLowerCase().includes('difícil'));
    }

    // B. Filtro por Texto (Nome)
    const term = searchInput.value.toLowerCase();
    if(term) {
        filtered = filtered.filter(g => g.name.toLowerCase().includes(term));
    }

    // C. Filtro por Quantidade de Jogadores
    const playerVal = parseInt(playersInput.value);
    if (!isNaN(playerVal)) {
        filtered = filtered.filter(g => {
            let pStr = g.players.split(' ')[0]; 
            if (pStr.includes('+')) {
                const min = parseInt(pStr);
                return playerVal >= min;
            }
            if (pStr.includes('-')) {
                const parts = pStr.split('-');
                const min = parseInt(parts[0]);
                const max = parseInt(parts[1]);
                return playerVal >= min && playerVal <= max;
            }
            return playerVal === parseInt(pStr);
        });
    }

    renderGames(filtered);
}

// --- Atualizar Contadores (Badges) ---
function updateFilterBadges() {
    document.getElementById('count-all').textContent = gamesData.length;
    document.getElementById('count-casais').textContent = gamesData.filter(g => parseInt(g.players.split('-')[0]) <= 2).length;
    document.getElementById('count-facil').textContent = gamesData.filter(g => 
        g.difficulty.toLowerCase().includes('fácil') || g.difficulty.toLowerCase().includes('muito fácil')
    ).length;
    document.getElementById('count-medio').textContent = gamesData.filter(g => g.difficulty.toLowerCase().includes('médio')).length;
    document.getElementById('count-dificil').textContent = gamesData.filter(g => g.difficulty.toLowerCase().includes('difícil')).length;
}

// --- Lógica de Favoritos ---
window.toggleFavorite = function(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    updateFavoritesUI();
    filterGames();
}

function updateFavoritesUI() {
    localStorage.setItem('utopiaFavorites', JSON.stringify(favorites));
    favCountEl.textContent = favorites.length;
    
    if(modalTotalFavs) {
        modalTotalFavs.textContent = favorites.length === 1 
            ? "1 jogo selecionado" 
            : `${favorites.length} jogos selecionados`;
    }

    favListEl.innerHTML = '';
    
    if (favorites.length === 0) {
        favListEl.innerHTML = '<li style="text-align:center; color: var(--text-secondary); padding: 20px;">Sua lista está vazia.</li>';
    } else {
        favorites.forEach(id => {
            const game = gamesData.find(g => g.id === id);
            if(game) {
                favListEl.innerHTML += `
                    <li>
                        <div>
                            <strong style="color: var(--primary);">${game.name}</strong><br>
                            <small style="color: var(--text-secondary);">${game.players} jog. | ${game.time}</small>
                        </div>
                        <i class="fas fa-trash btn-remove" onclick="toggleFavorite(${game.id})" title="Remover"></i>
                    </li>
                `;
            }
        });
    }
}

window.clearFavorites = function() {
    if(confirm("Deseja limpar sua lista?")) {
        favorites = [];
        updateFavoritesUI();
        filterGames();
    }
}

/* ==========================================================================
   4. EVENT LISTENERS
   ========================================================================== */
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterGames();
    });
});

searchInput.addEventListener('input', filterGames);

if(playersInput) {
    playersInput.addEventListener('input', filterGames);
}

// --- LÓGICA DO TEMA (CLARO/ESCURO) E TROCA DE LOGO ---
const logoDarkUrl = "https://repositorio.sbrauble.com/arquivos/up/ecom/logo/679e428f73352-zjs0q-4zghi-1923121100679e428f733b2.jpg"; 
const logoLightUrl = "https://repositorio.sbrauble.com/arquivos/up/ecom/logo/679e428f73352-zjs0q-4zghi-1923121100679e428f733b2.jpg"; // Certifique-se que esta imagem existe na pasta
const logoImg = document.getElementById('site-logo');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    
    themeBtn.innerHTML = isLight 
        ? '<i class="fas fa-sun"></i> Modo' 
        : '<i class="fas fa-moon"></i> Modo';

    if (logoImg) {
        logoImg.src = isLight ? logoLightUrl : logoDarkUrl;
    }
});

favBtn.addEventListener('click', () => {
    favModal.style.display = 'flex';
});

if(closeModal) {
    closeModal.addEventListener('click', () => {
        favModal.style.display = 'none';
    });
}

window.onclick = function(event) {
    if (event.target == favModal) {
        favModal.style.display = "none";
    }
}

// --- BOTÃO VOLTAR AO TOPO ---
if (backToTopBtn) {
    window.onscroll = function() {
        // Mostra botão se rolar mais de 300px
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
}

/* ==========================================================================
   5. INICIALIZAÇÃO
   ========================================================================== */
updateFilterBadges(); 
renderGames(gamesData); 
updateFavoritesUI();
