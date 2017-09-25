import React 				from 'react';
import { Link } 		from 'react-router-dom';
// resources
import { colors } 	from '../../resources/styles/colors';
// components
import Banner 			from '../../components/banner/Banner.jsx';
import BgContainer 	from '../../components/bg-container/BgContainer.jsx';
import Expediente 	from '../../components/expediente/Expediente.jsx';
import Image 				from '../../components/image/Image.jsx';
import Goals				from '../../components/goals/Goals.jsx';
import Section 			from '../../components/section/Section.jsx';
import Text 				from '../../components/text/Text.jsx';
import Title 				from '../../components/title/Title.jsx';
import Timeline			from '../../components/timeline/Timeline.jsx';
import VideoYoutube	from '../../components/video-youtube/VideoYoutube.jsx';
// SVGs
import Opopular 		from '../../resources/img/opopular.svg';

const exped = [
    {
        secao: 'Redação',
        colaboradores: [
			{ 
				nome: [
						'Arenusa Goulart',
						'Aline Marques'
				],
				funcao: 'Produção digital' 
			},
			{ 
				nome: [
					'Fabrício Cardoso',
					'Silvana Bittencourt', 
					'Michel Victor', 
					'Frank Martins', 
					'Márcio Leijoto' 
				], 
				funcao: 'Edição multiplataforma' 
			},
			{ 
				nome: [
					'André Rodrigues', 
					'Breno Martins'
				],
				funcao: 'Edição de arte e capa' 
			},
			{ 
				nome: [
					'Galtiery Rodrigues', 
					'Rogério Borges', 
					'Carla Borges'
				],
				funcao: 'Reportagem' 
			},
			{ 
				nome: [
					'Lorisvaldo de Paula', 
					'Carlos Costa', 
					'Hélio Nunes', 
					'Sebastião Nogueira', 
					'Marcello Dantas', 
					'Weimer Carvalho', 
					'Cristiano Borges', 
					'Yosikasu Maeda' 
				],
				funcao: 'Fotografias' 
			},
			{ 
				nome: [
					'Carmen Curti', 
					'Ana Helena Borges', 
					'Marcello Dantas', 
					'Rubens Júnior', 
					'Cristiano Borges'
				],
				funcao: 'Audiovisual' 
			},
			{ 
				nome: [
					'Luiz Antena', 
					'Érik Kaji', 
					'Ramon Madeira'
				],
				funcao: 'Artes e infográficos' 
			},
			{ 
				nome: [
					'Lúcio Rodrigues', 
					'Marco Aurélio Soares'
				],
				funcao: 'Diagramação' 
			},
			{ 
				nome: [
					'Bruno Kratka', 
					'Jordão Barroso',
					'Rafhael Oliveira',
				],
				funcao: 'Front-end' 
			},
			{ 
				nome: [
					'Rafael Drone Like'
				],
				funcao: 'Vídeo 360 graus' 
			},
			{ 
				nome: [
					'Weimer Carvalho'
				],
				funcao: 'Edição de imagens' 
			},
			{ 
				nome: [
					'Deivison Moura'
				],
				funcao: 'Tratamento de imagens' 
			},
		]
	}
];

const goals = [
	{
		description: 'verificar o estado de conservação das áreas remediadas;'
	},
	{
		description: 'avaliar os níveis de radiação gama nestas áreas;'
	},
	{
		description: 'avaliar as concentrações de atividade de césio-137 em amostras de vegetação e solo, quando necessário, coletadas nas áreas remediadas e nos entornos;'
	},
	{
		description: 'prestar apoio técnico em questões de radioproteção, visando o controle do risco potencial de exposição à radiação ionizante para a população, meio ambiente e trabalhadores;'
	},
	{
		description: 'fornecer subsídios à tomada de decisão pelos órgãos competentes nas três esferas de Governo.'
	},
];

class TimeLineDate {
	constructor(date, content, period){
		this.date = date;
		this.period = period;
		this.content = (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<Title 
							title={this.date}
							color={colors.primary}
						/>
						<Title 
							title={`${this.period} anos`}
							color={colors.textPrimary}
							type={2}
						/>
					</div>
					{content.map((item, index) => {
						return (
							<div className="col-xs-12" key={index}>
								<Text
									text={item.props.text}
								/>	
							</div>
						)
					})}
					
				</div>
			</div>
		)
	}
}

const datesTimeLine = [
	new TimeLineDate("2017", [
		{
			type: "Text", 
			props: {
				text: "Primeira meia vida: Tempo necessário para que metade dos átomos da substância emita a radiação que possui, deixando de existir a partir disso."
			}
		}
	],
	30),
	new TimeLineDate("2047", [
		{
			type: "Text", 
			props: {text: "Segunda meia vida: Tempo necessário para que a metade da metade dos átomos restantes emita a radioatividade."}
		}
	],
	60),
	new TimeLineDate("2077", [
		{
			type: "Text", 
			props: {
				text: "Terceira meia vida: Tempo necessário para que metade dos átomos da segunda metade de césio emita radiação."
			}
		}
	],
	90),
	new TimeLineDate("2287", [
		{
			type: "Text", 
			props: {
				text: "10 meias vidas depois: Tempo calculado para que todos os átomos de césio dispersados em Goiânia emitam a radiação e a substância, portanto, deixe de existir."
			}
		}
	],
	300)
];

function Future() {
	return (
		<div className="container-fluid">
			<section style={{marginBottom: 90}}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/futuro/futuro_capa.jpg`, overlay: true}}
					height="690px"
					hero={true}
					video={{poster: `${process.env.PUBLIC_URL}/img/futuro/frame1-video-futuro.jpg`, mp4: `${process.env.PUBLIC_URL}/video/video-cesio.mp4`}}
				>
				<div className="row center-xs middle-xs">
					<div className="col-xs-12">
						<div className="row center-xs">
							<div className="col-md-6 col-xs-11">
								<Title 
									title="300 anos para deixar de existir"
									type={1}
									color="#FFFFFF"
								/>
							</div>
						</div>
					</div>
				</div>
				</BgContainer>
			</section>

			<Section >
			 	<div className="col-md-9 col-xs-11">
					<Title
						title="Trinta anos depois, o césio 137 chegou à chamada meia vida e isso quer dizer que apenas metade dos átomos emitiu radiação, até então"
						type={2}
						fontStyle="italic"
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11" style={{marginTop: 85, marginBottom: 85}}>
					<Timeline
						dates={datesTimeLine}
					/>
				</div>
			</Section>

			<Section  fullWidth={true}>
				<div className="row">
					<div className="col-xs-12">
						<div className="col-sm-12 col-xs-12">
								<Title 
									title="Objetivos da&#13;&#10;monitoração"
									color={colors.primary}
								/>
						</div>
						<BgContainer
							color="#2a6aff"
						>
						<Section>
							<div className="col-md-9 col-xs-11">
								<Goals  
									goals={goals}
								/>
							</div>
						</Section>
						</BgContainer>
					</div>
				</div>
			</Section>

			<Section>
				<Banner bannerIndex={1}/>
			</Section>
		
			<Section>
				<div className="col-md-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="OUTROS RELATOS"
						color={colors.primary}
					/>
				</div>
			</Section>


			<Section>
				<div className="col-md-9 col-xs-11">
					<Title 
						title='“Aqui todos estão morrendo de câncer”'
						type={3}
					/>
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/lourdes.jpg`}
						subtitle="Lourdes dos Santos Barcellos."
						rectangle={true}
					/>
					<Text
						text='Há cinco anos, a dona de casa, ainda não aposentada, Lourdes dos Santos Barcellos, de 87 anos, preserva em um quadro a foto mais recente que tirou com o filho, o farmacêutico e bioquímico Silas Teixeira Barcellos, 55. Ele morreu em agosto de 2012, em decorrência de um câncer nos ossos diagnosticado dois anos antes. Das mais antigas moradoras do entorno da Rua 26-A, não quis deixar o local mesmo após o acidente. “Moro aqui há 40 anos”, justifica.'
					/>
				</div>
			</Section>

			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Lourdes acredita na relação do câncer do filho com o césio 137. Além de morar com a esposa na Avenida Oeste, paralela à rua da casa da mãe, Silas vivia visitando-a no tal número 218 da Rua 15-A, que aparece na relação oficial dos locais com contaminação residual. “O câncer levou meu filho. Não gosto nem de lembrar, porque ele sofreu demais. Aqui, todos estão morrendo de câncer”, diz ela, que há anos aguarda uma resposta da Justiça quanto ao pedido de pensão e reconhecimento como vítima oficial do césio.'
					/>
				</div>
			</Section>

			<Section >
				<div className="col-md-9 col-xs-11"  style={{marginTop: 85}}>
					<Title 
						title='A cada seis meses: “É como caçar doença”'
						type={3}
					/>
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/rubens.jpg`}
						subtitle="José Rubens Fabiano."
						rectangle={true}
					/>
					<Text
						text='A família do funcionário público José Rubens Fabiano, de 59 anos, foi diretamente atingida pelo acidente do césio 137. Morador da mesma residência de 30 anos atrás, no Setor Aeroporto, as marcas da tragédia estão na porta de casa, na calçada contaminada que precisou ter o concreto reforçado, em um dos irmãos que teve a perna perfurada por ter levado o césio no bolso da calça, no outro que perdeu tudo porque teve a casa demolida e na rotina de exames que precisa fazer de seis em seis meses.'
					/>
				</div>
			</Section>

			<Section>
				<div className="col-md-9 col-xs-11"  style={{marginBottom: 45}}>
					<Text
						text='“É como caçar doença, mas nessa caçada, graças a Deus, nada foi encontrado ainda”, comemora. Na casa ao lado, porém, vive uma das irmãs, cujo quintal serviu de depósito temporário para os tambores de rejeitos recolhidos pelos técnicos da Comissão Nacional de Energia Nuclear (Cnen) em 1987. O local foi contaminado parcialmente, teve de ser concretado e ela foi diagnosticada com câncer há cinco anos, sendo uma dos 39 doentes da região. José Rubens e os filhos são reconhecidos como vítimas oficiais do césio.'
					/>
				</div>
			</Section>
			<section  style={{marginBottom: 60}}>
				<BgContainer
					color="#000000"
				>
					<div className="row center-xs">
						<div className="col-md-9 col-xs-12">
							<VideoYoutube
								videoID="B99UQGCyspA"
								title="Especial Césio: Depoimento Odesson"
							/>
						</div>
					</div>
				</BgContainer>
			</section>
			<Section>
				<div className="col-md-9 col-xs-11">
				<Title 
					title='Fatos e curiosidades'
					color={colors.primary}
				/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/dinheiro.jpg`}
						alt="Dinheiro contaminado"
						width="100%"
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30">
					<Title 
						title='Dinheiro contaminado'
						type={3}
					/>
					<Text
						text='O dinheiro circulante na cidade teve que ser controlado para evitar contaminação, já que houve demora até a descoberta do acidente. Foram monitoradas 10,2 milhões de cédulas e foi constatada a contaminação em 68 delas'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title='Crianças abandonadas'
						type={3}
					/>
					<Text
						text='Pais e filhos foram separados, colocados em hospitais diferentes por tempo indeterminado, conforme os níveis de contaminação. Crianças chegaram a ficar sozinhas ou sob o cuidado de estranhos, na extinta Fundação Estadual do Bem-Estar do Menor (Febem).'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/suor.jpg`}
						alt="Dinheiro contaminado"
						width="100%"
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30">
					<Title 
						title='Césio eliminado pelo suor'
						type={3}
					/>
					<Text
						text='A equipe médica verificou que o césio podia ser eliminado pelo suor. Deu-se início, então, ao uso de luvas de látex, realização de exercícios ergométricos e de sauna para estimular a sudorese. A avaliação do tratamento era feita por análises radioquímicas diárias.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30"  style={{marginTop: 45}}>
					<Title 
						title='Azul da Prússia e vinagre'
						type={3}
					/>
					<Text
						text='O medicamento Azul da Prússia, que já havia sido experimentado em Chernobyl, em 1986, foi utilizado para auxiliar na descontaminação das vítimas. A aplicação inicial foi de 3 gramas/dia até atingir a dose plena de 10 gramas/dia. Outro método adotado foi o banho de vinagre.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/coco-coca.jpg`}
						alt="Dinheiro contaminado"
						width="100%"
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30">
					<Title 
						title='Manga com coco e Coca Cola'
						type={3}
					/>
					<Text
						text='Os sintomas de mal-estar foram atribuídos inicialmente a alimentos que as pessoas tinham ingerido. Wagner Mota Pereira, que teve contato direto com o césio, achou que fosse a manga com coco que havia comido. A família de Devair Ferreira pensou que fosse uma Coca Cola estragada.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30"  style={{marginTop: 45}}>
					<Title 
						title='Veículos contaminados'
						type={3}
					/>
					<Text
						text='Mais de 50 veículos, entre caminhões, automóveis, ônibus e motocicletas tiveram de passar por processo de descontaminação. A circulação das pessoas contaminadas e a demora em descobrir que se tratava de um acidente radiológico favoreceram a situação.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 45}}>
					<Title 
						title='Tentativas de afastar o medo'
						type={3}
					/>
					<Text
						text='Os técnicos da Cnen jogaram partida de futebol no Estádio Olímpico para mostrar que não havia risco e o secretário de Saúde, Antônio Faleiros, chegou a se mudar com a família para um sítio perto do depósito dos rejeitos em Abadia de Goiás também para afastar o medo da população.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/tecnicos.jpg`}
						alt="Dinheiro contaminado"
						width="100%"
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30">
					<Title 
						title='Técnicos internacionais'
						type={3}
					/>
					<Text
						text='Especialistas internacionais, de países como Japão, Estados Unidos, Alemanha, Argentina e a extinta União Soviética (URSS), ajudaram no processo de descontaminação, em Goiânia. Vieram equipamentos, ainda, de países como Inglaterra, Hungria, Holanda, França e Israel.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30"  style={{marginTop: 45}}>
					<Title 
						title='Sala de necropsia plastificada'
						type={3}
					/>
					<Text
						text='O trabalho de necropsia nos corpos das vítimas que faleceram teve de seguir um rígido procedimento. A sala do Hospital Naval Marcílio Dias, no Rio de Janeiro, foi totalmente revestida com plástico e o monitoramento avaliou a espessura do chumbo em que os corpos seriam revestidos.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/monitorado.jpg`}
						alt="Dinheiro contaminado"
						width="100%"
					/>
				</div>
			</Section>
						<Section >
				<div className="col-md-9 col-xs-11 m-bottom30">
					<Title 
						title='Público monitorado'
						type={3}
					/>
					<Text
						text='De 30 de setembro a 21 de dezembro de 1987, mais de 112,8 mil pessoas foram monitoradas e passaram por medição de radiação no Estádio Olímpico, em Goiânia. Desse total, 249 foram identificadas com taxas de exposição indicativas de contaminação interna e externa.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 45}}>
					<Title 
						title='Classificação Nível 5'
						type={3}
					/>
					<Text
						text='A International Nuclear Events Scale (INES) classificou o acidente radiológico do césio 137 como sendo de nível 5, numa escala que vai de 1 a 7. De 1 a 3 são considerados incidentes e, a partir de 4, já são acidentes, ou seja, quando ocorre pelo menos uma morte por radiação.'
					/>
				</div>
			</Section>

			<Section>
				<Banner bannerIndex={2}/>
			</Section>

			<section style={{marginBottom: 90}}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/futuro/breve-caminho.jpg`, overlay: true}}
					hero={true}
				>
				<div className="row center-xs middle-xs" style={{height: 690}}>
					<div className="col-xs-12">
						<div className="row center-xs">
							<div className="col-sm-10 col-xs-12">
								<Title 
									title="Um breve caminho sem fim"
									type={1}
									color="#FFFFFF"
								/>
							</div>
							<div className="col-sm-8 col-xs-12">
								<Title
									title="No itinerário da tragédia, há marcas que, 30 anos depois, ainda estão presentes, reativando na memória o maior drama que Goiânia já viveu"
									type={2}
									color="#FFFFFF"
									fontStyle="italic"
								/>
							</div>
						</div>
					</div>
				</div>
				</BgContainer>
			</section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='O caminho da cápsula de césio 137, de seu furto à sua abertura, é curto. Do terreno vizinho à antiga Santa Casa, onde hoje está o Centro de Convenções de Goiânia, até o primeiro endereço da tragédia, na Rua 57, no Bairro Popular, são dez minutos de caminhada. Desse para o ferro-velho onde ela foi definitivamente aberta, no Setor Aeroporto, nem isso. Um itinierário longo o suficiente, porém, para destruir vidas, estigmatizar uma cidade e ainda causar muita dor. Andar por esse trajeto é constatar mudanças, mas também feridas abertas; é perceber que muita gente se lembra do que aconteceu ali, mas que um número ainda maior de pessoas ignora totalmente aqueles fatos.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Tudo começa na esquina das avenidas Tocantins e Paranaíba, por onde milhares de pessoas transitam todos os dias. Boa parte de toda essa gente que passa por um dos cruzamentos mais movimentados da região central de Goiânia não tem a menor ideia de que, 30 anos atrás, no final de uma tarde de setembro, dois homens poderiam ser vistos ali, puxando uma pesadíssima peça de chumbo encontrada onde antes fora o Instituto Goiano de Radiologia. A clínica ficava ao lado da antiga sede da Santa Casa e hoje a região continua a concentrar muitas unidades de saúde, incluindo clínicas de exames de imagem que usam aparelhos que contêm elementos radiativos.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Se algum morador da casa antiga que fica nesta mesma esquina – imóvel de arquitetura nostálgica que fala de uma Goiânia do passado – estivesse na varanda em arcadas, teria observado os dois homens saindo do lote baldio, fazendo força ao carregarem sua própria desgraça. Os amigos Roberto Santos e Wagner Mota, catadores de papel e outros objetos deixados nas ruas da região central, passavam constantemente em frente a esta casa. E também pela portaria do pequeno prédio quadrado no mesmo cruzamento, pela calçada da estação metereológica, atravessavam avenidas que tinham um trânsito mais calmo, percorriam ruas que insistem, até hoje, em estar na penumbra.'
					/>
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/lote-57.jpg`}
						subtitle="Rua 57."
						rectangle={true}
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Ao entrar no terreno abandonado e acharem o velho equipamento de radiologia, Roberto e Wagner tinham a perspectiva de conseguir um dinheirinho extra. Valia o esforço físico de carregar aquela peça de peso descomunal. Estavam, agora, diante do Ginásio Rio Vermelho. Palco de shows que agitavam a juventude naqueles anos 1980, o lugar devia estar quieto naquele maldito início de noite. Começaram a descer a Avenida Oeste. Lá já existia um velho flamboyant onde namorados deixaram impressos corações com iniciais. Ele sobreviveu a essas três décadas e aos amores nele gravados. Ao cruzarem a Rua 55, os dois catadores passaram quase nos fundos do Estádio Olímpico de tantos craques, de jogos inesquecíveis, de clássicos que entraram para a história.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Já está perto, falta só um pouquinho! Um estimulava o outro, suados ambos, reclamando do peso daquele troço. Há lotes baldios no caminho, a vizinhança é formada por casas dos anos 1950 e barracões de aluguel. A casa fica quase no final da rua, ainda faltam uns bons metros. Enfim, eles chegam ao destino. E essa palavra poucas vezes será tão adequada: o destino daquele ponto está selado para sempre. Ali o césio faria suas primeiras vítimas. Está escrito que 30 anos depois daquele setembro, restará apenas o vazio. No muro desse nada onde antes ficava a residência de Roberto, no clarão desse cimento que alicerça tanta tristeza, vinga um verso de Belchior: "Enquanto houver espaço, corpo, tempo e algum modo de dizer não, eu canto".'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Após puxarem para dentro do lote o que restava do aparelho de radiologia desativado, Roberto e Wagner começaram a trabalhar em seu achado. Pancadas secas ressoavam nas vizinhanças. O dois tentavam, a muio custo, superar a proteção do equipamento. Quem dera não tivessem conseguido. Se naquele setembro, o trabalho dos rapazes ressoava, depois que o pior aconteceu, que a casa foi demolida, que a ferida se abriu, restou o silêncio. Após o acidente, todos evitavam sequer passar perto. Um fantasma se espalhou pela vizinhança e fez parte deste bairro parar. O lugar fica a poucos metros do Mercado Popular da 74, então um agitado posto de vendas de alimentos. Goiânia tinha outra dinâmica em 1987 e a região central gozava de uma importância perdida em muitos aspectos.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='A tragédia estava apenas começando. Ela iria se espalhar e matar. Ao vender a peça de chumbo com o césio, cujas primeiras partículas já haviam se espalhado, Roberto dava maior amplidão àquele que seria o maior acidente radiológico da história em área urbana. O catador, já muito exposto ao material, carregou o césio pela Rua 57, virou à direita na Rua 80, passou pela Praça José Honorato, percorreu novamente a Avenida Oeste e dobrou à esquerda, na então 26-A, hoje chamada Francisca da Costa Cunha. Esta rua carrega a cicatriz do ponto em que o acidente se agravou e o césio 137 fez suas vítimas mais emblemáticas.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='O lugar onde ficava o ferro-velho de Devair Alves viu seu dono abrir a cápsula e encantar-se com o brilho fosforecente que o pó que havia lá dentro emanava. E também ali a menina Leide das Neves brincou com a substância mortífera. Maria Gabriela, sua tia, teve o pó brilhante na sala, o que a fez perder o lar e a vida. Dois empregados do local, Israel Batista e Admilson Alves, misturaram-no entre os dedos. Tal como ocorreu na Rua 57, os dois lotes que haviam ali se resumiriam a um nada cinza pelo qual as pessoas passam sem parar, sem lembrar. Áreas vagas que formam uma enorme cicatriz no coração da capital, marca indelével, mas hoje quase invisível.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11" style={{marginTop: 85}}>
					<Title 
						title='TÃO PERTO DO CÉSIO'
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='"Havia uma parede grande ainda em pé. Uma espécie de cômodo da antiga clínica. Era nele que ficava o maquinário. Foi ali que eles pegaram a cápsula. Era bem aqui." As lembrançcas do fretista Cesário Augusto Queiroz, 68 anos, ainda estão vivas. "Me lembro como se tivesse acontecido ontem." Desde 1982 trabalhando na praça que fica na esquina das avenidas Tocantins e Paranaíba,  poucos estiveram tão perto do embrião de uma tragédia. "Ninguém ia imaginar que aquilo poderia acontecer. Ninguém podia saber."'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Nem Cesário imaginava algo do tipo, nem o lavador de carros Lucivaldo Luíz, outra testemunha dos tempos em que o acidente aconteceu. "Estava tudo demolido. Era um buracão. Tinha só um muro baixo e uma grade por cima cercando o terreno. Todo mundo entrava aí", informa, apontando para onde hoje está erguido o Centro de Convenções de Goiânia. Ele concorda: ninguém poderia imaginar. E os catadores Roberto Santos e Wagner Mota também não. Entraram, acharam o equipamento abandonado, levaram-no. A vida de todos eles mudava naqueles instante.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='A vizinhança deve ter ouvido os golpes desferidos contra a sólida estrutura, perfurando uma placa protetora de lítio. As primeiras partículas da substância radioativa que continha foram liberadas. "Um deles chamou meu marido para ver o que tinham encontrado. Dizia que era lindo, que brilhava no escuro. Nem ele e nem eu fomos ver. Eu estava cuidando das minhas filhas. Essa foi a decisão que salvou a minha vida e da minha família", reconhece a pedagoga aposentada Marcolina Fernades, 65 anos. Em 1987, ela morava a duas casas do local onde o césio começou a se espalhar.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='"Depois nós mudamos da Rua 57. Meu sogro, que era dono de nossa casa, ficou com medo e vendeu o imóvel.." Por ironia, Marcolina, há pouco menos de dois anos, comprou um apartamento  que faz divisa com outro ponto condenado pelo acidente, o local onde ficavam o ferro-velho e a residência de Devair Alves. "A cápsula terminou de ser aberta aqui. Aqui a Leide das Neves pegou no césio, aqui a Maria Gabriela morava. Eu as conhecia. Eram uma família honesta, trabalhadora", lamenta, olhando a área concretada no Setor Aeroporto, a três quarteirões do endereço na 57.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='O edifício de dona Marcolina foi erguido nos fundos da área. Na frente há duas torres residenciais. Os moradores deste condomínio estacionam seus carros em frente ao lote vazio, olham com desconfiança equipes de reportagem que fotografam e filmam a área, acostumaram-se com técnicos da Comissão Nacional de Energia Nuclear fazendo medições regulares dos níveis de radiação no local, mas não gostam de falar a respeito. O porteiro avisa que a síndica deixou um recado: não querem dizer nada. Nas vizinhanças ainda residem pessoas que foram diretamente afetadas pelos efeitos do césio. A memória daquele período duro, para quem o viveu, não pode ser apagada.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='O dono da pastelaria mais antiga do Mercado da 74 diz que já não se lembra direito do acidente de três décadas atrás, apesar de os amigos garantirem que ele se recorda de tudo. Talvez também prefira manter publicamente um silêncio que o preserve do trauma. Os comerciantes da região do acidente sofreram muito, passaram por dificuldades, tiveram suas vidas transformadas com a abertura da cápsula. "Eu quebrei", relata o barbeiro Jovino Pereira. "Eu tinha uma loja aqui na 74 e a freguesia sumiu. Acharam uma partícula de césio em frente à minha loja. Agradeço a Jesus não ter sido afetado diretamente. Muitos vizinhos foram."'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='O proprietário do imóvel alugado por Jovino morreu de câncer. O farmacêutico que atendeu um dos acidentados e era seu vizinho de loja, também sucumbiu à doença. "Ele se chamava Rafael. Ele me contou que um dos catadores foi até a farmácia com a queimadura do césio para que passasse uma pomada. Não sabia como havia adquirido aquele ferimento." Jovino se lembra do então presidente José Sarney no início da Rua 57, em frente ao Mercado, garantir que estava tudo bem. "Mas ele não se aproximou do lugar do acidente. Tirou suas fotos e foi embora." Jovino também foi. Fechou sua loja e mudou-se de país. Retornou para a região alguns anos depois. Retornou, talvez, para poder contar o que viu 30 anos atrás.'
					/>
				</div>
			</Section>

			<Section>
				<Banner bannerIndex={3}/>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12"  style={{marginTop: 45, marginBottom: -45}}>
					<Title 
						title='DIANTE DAS CICATRIZES'
						color={colors.primary}
					/>
				</div>

			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/futuro/cesar-augusto1.jpg`}
						subtitle="Lucivaldo Luiz Guimarães (Lavador de carros) e Cesário Augusto Queiroz (Fretista), falam do acidente radioativo. Os dois trabalham na Avenida Oeste esquina com Avenida Paranaíba, ao lado do Centro de Convenções."
						rectangle={true}
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Andar por estas ruas e ir a tais locais é voltar também no tempo e encontrar pessoas que viram o drama que atingiu não só os mais diretamente envolvidos, mas todo um bairro, toda uma cidade. O fretista Cesário se lembra dos caminhões passando pela Av. Tocantins levando os rejeitos. Dona Marcolina recorda da interdição de sua rua, dos tratores demolindo a casa dos vizinhos, de as pessoas saírem dali doentes, desesperadas. Os comerciantes do Mercado da 74 guardam na memória as dificuldades que o acidente trouxe para a própria sobrevivência.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Muita gente porém passa por esses lugares sem saber o que os lotes concretados significam. "Nunca ouvi falar", diz uma moradora da Rua 57. "Estou indo para a casa da minha irmã. Não sabia que havia sido aqui", acrescenta uma senhora apressada. "Sei que foi aqui, mas só sei isso", admite um vendedor de frutas. A vendedora Karine Lemos, 39 anos, mora só há dois meses na região. "Soube que havia sido aqui depois que me mudei. Acredito que não haja mais problemas", pondera, mas sem disfarçar um olhar mais desconfiado em direção ao lote concretado.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='O torneador Pedro Ferreira Dias era amigo de futebol de um dos catadores que levaram o aparelho de radiologia para casa. Hoje, sua oficina é vizinha de muro do lote vazio onde tudo começou. "Eu passava aqui quatro vezes por dia", conta. "Todo ano os técnicos da CNEN [Comissão Nacional de Energia Nuclear] vêm fazer medições. E há muita gente também que aparece curiosa para saber onde tudo aconteceu", relata. "Acho importante as pessoas saberem mais sobre isso aqui, até para que uma acidente como aquele não volte a acontecer."'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-sm-12 col-xs-12" style={{marginTop: 45}}>
					<Title 
						title='MEMÓRIA DE UM MENINO'
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Três décadas atrás, esses lugares atraíam a atenção do mundo. Eram cenários do maior acidente radiológico da história. Um menino de 10 anos estudava não longe dali e via a movimentação. Camihões que passavam escoltados com contêineres exibindo o símbolo da radioatividade, medições de radiação, um estádio que se tornara acampamento, pessoas que pareciam astronautas pelas ruas, olhares assustados. Parte da família ligava preocupada, as conversas não eram para crianças. Precisaríamos mudar? Teria que sair da escola? O pai do colega de sala conheceu o dono do ferro-velho, contava, com ares de importância.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='Alguns anos depois, quando já atuava profissionalmente contando e relembrando histórias passadas, foi estranho recordar as vítimas e as barbaridades cometidas contra elas – o apedrejamento do cortejo fúnebre de uma criança! –, entender os riscos que a ciência apontava, compreender a dimensão daquele aocntecimento inesperado e cruel. E é estranho perceber que só três décadas depois aquela criança, agora um homem de meia-idade, foi pela primeira vez aos locais onde tudo se desenrolou, refazendo o percurso da maior tragédia de sua terra. '
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11" style={{marginBottom: 65}}>
					<Text
						text='Aos 10 anos vi e vivi cenas que ficaram gravadas. Recordo-me de Cid Moreira, no Jornal Nacional, falar de Goiânia com voz meio fúnebre, semblante pesado. Recordo-me de meu pai, que trabalhava em uma lotérica no Centro, dizer que vira um repórter da Globo fazendo matéria sobre o césio em frente à sua loja. Recordo-me de um cachorro que entrou inadvertidamente no lote contaminado e foi perseguido para ser sacrificado, já que se tornara fonte de radiação. Aos 40, retorno a este universo que me ficou tão distante, apesar de tão próximo. Não temos o direito de aumentar este vazio embaçando nossa memória, ainda que ela venha da infância, de um menino.'
					/>
				</div>
			</Section>
			<section style={{marginBottom: 90}}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/futuro/flamarion.jpg`, overlay: true}}
					hero={true}
				>
				<div className="row center-xs middle-xs" style={{height: 690}}>
					<div className="col-xs-12">
						<div className="row center-xs">
							<div className="col-sm-10 col-xs-12">
								<Title 
									title="Entrevista – Flamarion Barbosa Goulart"
									type={1}
									color={colors.primary}
								/>
							</div>
							<div className="col-sm-8 col-xs-12">
								<Title
									title="“Cada um tem parcela de culpa. Menos eu”"
									type={2}
									color="#FFFFFF"
									fontStyle="italic"
								/>
							</div>
						</div>
					</div>
				</div>
				</BgContainer>
			</section>
			<Section >
				<div className="col-md-9 col-xs-11">
					<Text
						text='No dia 29 de setembro de 1987, quando surgiu a suspeita de contaminação e de que a fonte era um equipamento deixado na Vigilância Sanitária, o físico nuclear Flamarion Barbosa Goulart era a única pessoa com acesso em Goiânia a um medidor de radiação. Desde o primeiro momento, foi aos locais contaminados, isolando áreas, identificando pessoas que deveriam ser levadas para o Estádio Olímpico, onde ficaram acampadas em uma situação deprimente, como ele próprio define. Na primeira semana, após o acidente se tornar público, não conseguiu sequer dormir, mergulhado naquele turbilhão. Depois, o físico nuclear foi condenado pela Justiça como um dos responsáveis pelo acidente, junto com os médicos Criseide de Castro Dourado, Carlos Bezerril e Orlando Teixeira.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30">
					<Text
						text='Três décadas depois, Flamarion recebeu a equipe do POPULAR no Hospital Araújo Jorge, onde é supervisor de radioproteção, e falou sobre impacto do acidente em sua vida.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 25}}>
					<Title 
						title='O que realmente aconteceu naquele 29 de setembro de 1987?'
						type={3}
					/>
					<Text
						text='Eu recebi o telefonema de um colega físico, o Walter Mendes, que trabalhava antes de mim na Associação de Combate ao Câncer de Goiás (ACCG), e ele me disse que havia um pessoal apresentando sintomas de contaminação radioativa. Ele perguntou se eu tinha um equipamento para fazer essa medição, porque havia um objeto na Vigilância Sanitária e o pessoal estava desconfiado de que fosse ele que estava emitindo radiação. Então, peguei o Geiger-Müller, monitor de área da Associação do Serviço de Radioterapia do Hospital Araújo Jorge, e confirmei que a peça emitia radiação.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 25}}>
					<Title 
						title='Havia muita radiação?'
						type={3}
					/>
					<Text
						text='Tinha radiação na peça, sim. Eu fui com o pessoal da Vigilância no local onde a peça estava e foi aberta para ver se tinha contaminação e realmente encontramos muito material, muito papel contaminado, chão contaminado, pessoas contaminadas com radiação. Aí decidimos levar todo mundo que estava contaminado para o Estádio Olímpico e assim fomos fazendo.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 25}}>
					<Title 
						title='Vocês refizeram o caminho da cápsula?'
						type={3}
					/>
					<Text
						text='Sim, o pessoal indicava: “Fulano que estava aqui mora em tal local” e então íamos àquele lugar para ver se tinha contaminação.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 25}}>
					<Title 
						title='Como foi o contato com a Leide das Neves?'
						type={3}
					/>
					<Text
						text='Eu estava caminhando para a casa do pai dela, o Ivo, porque tinham indicado que ele havia levado um pouco do material para lá. A gente ia conversando, pedindo informações e ia atrás. Quando eu desci do carro e estava indo para a casa do Ivo, o monitor estourou a escala e eu achei que fosse um pouco do material que estava no chão. Eu medi o chão e não havia nada. De repente, a escala estourou de novo. E eu fiquei intrigado, pensando no que estava acontecendo. Foi quando eu percebi que quando aquela menina passava perto de mim, a escala estourava. Eu medi a menina e ela realmente estava apresentando uma dose muito alta de radiação.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 25}}>
					<Title 
						title='Porque ela tinha ingerido o césio?'
						type={3}
					/>
					<Text
						text='Eu perguntei e me disseram que ela havia brincado com o material que o pai dela trouxe. Foi então que vimos que ela estava com um índice muito alto de contaminação, talvez a que estivesse com o maior índice. Aqui deu um desespero danado na gente, não sabíamos o que fazer. Já encaminhamos e pedimos auxílio médico.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-md-9 col-xs-11 m-bottom30" style={{marginTop: 25}}>
					<Title 
						title='Por que o senhor diz que “deu um desespero”?'
						type={3}
					/>
					<Text
						text='Porque a gente não sabia o que fazer com aquela pessoa. Só sabíamos identificar onde tinha radiação, cercar a área e isolar o pessoal que estava contaminado. Porque há uma diferença muito grande entre as pessoas contaminadas e as que ficaram expostas. A exposição à radiação do césio não tem problema nenhum porque é uma radiação gama normal para tratamento e aquele equipamento, que era bem antigo, já emitia uma radiação baixa. Mas a contaminação, que era pelas radiações alfa e beta, essa sim, é muito perigosa. Por isso ficamos muito preocupados com o pessoal que estava contaminado. Eu mesmo fiquei exposto muitas vezes porque fiquei andando naquela área e não tive problema nenhum.'
					/>
				</div>
			</Section>

			<Section>
				<a href='https://www.opopular.com.br/editorias/cidade/entrevista-flamarion-barbosa-goulart-1.1343684' target="_blank" rel="noopener noreferrer">
					<div className="row">
						<div className="col-xs-12" style={{fontSize: 29, fontStyle: 'italic', marginBottom: 20}}>
							Leia a matéria completa
						</div>
						<div className="col-xs-12">
							<img src={Opopular} alt="O popular"/>
						</div>
					</div>
				</a>
			</Section>


			<Section>
				<Banner bannerIndex={4}/>
			</Section>
			<section  style={{marginBottom: 60}}>
				<BgContainer
					color="#000000"
				>
					<div className="row center-xs">
						<div className="col-md-9 col-xs-12">
							<VideoYoutube
								videoID="KupqgljX8nk"
								title="Especial Césio: Depoimento Odesson"
							/>
						</div>
					</div>
				</BgContainer>
			</section>
			<Section>
				<div className="col-xs-12">
					<Expediente exped={exped} />
				</div>
			</Section>

			<section>
				<Link to="/ontem">
					<BgContainer 
						color="#cccccc"
						img={{url: `${process.env.PUBLIC_URL}/img/capa/capa_passado.jpg`, overlay: true}}
						hero={true}
						bgMobilePosition='62%'
					>
					<div className="row center-xs middle-xs" style={{height: 690}}>
						<div className="col-xs-12">
							<div className="row center-xs">
								<div className="col-sm-10 col-xs-12">
									<Title 
										beforeTitle="LEIA TAMBÉM:"
										title="ONTEM"
										type={4}
										color="#FFFFFF"
									/>
								</div>
							</div>
						</div>
					</div>
					</BgContainer>
				</Link>
			</section>
		</div>
	);
}

export default Future;