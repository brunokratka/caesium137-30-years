import React from 'react';
import faker from 'faker';
import moment from 'moment';

import Section 				from '../../components/section/Section.jsx';
import Text 					from '../../components/text/Text.jsx';
import Quotes 				from '../../components/quotes/Quotes.jsx';
import Image 					from '../../components/image/Image.jsx';
import Title 					from '../../components/title/Title.jsx';
// import Hero 					from '../../components/hero/Hero.jsx';
import BgContainer 		from '../../components/bg-container/BgContainer.jsx';
import Video 					from '../../components/video/Video.jsx';
import Gallery 				from '../../components/gallery/Gallery.jsx';
import Expediente 		from '../../components/expediente/Expediente.jsx';
import Countdown 			from '../../components/countdown/Countdown.jsx';
// import LaunchModal 		from '../../components/modal/LaunchModal.jsx';
import ImgModal 			from '../../components/img-modal/ImgModal.jsx';
import Deposit 				from '../../components/deposit/Deposit.jsx';
import { colors } 		from '../../resources/styles/colors';
import Rejects 				from '../../components/rejects/Rejects.jsx';
import Capsule				from '../../components/capsule/Capsule.jsx';
import Timeline				from '../../components/timeline/Timeline.jsx';
import Goals					from '../../components/goals/Goals.jsx';
import Monitoring			from '../../components/monitoring/Monitoring.jsx';

const text = faker.lorem.paragraph(10);
const author = "Littlefinger";
const subtitle = 'Iose, de Rosane Gurgel, é um dos selecionados para a mostra.';

const exped = [
    {
        secao: 'Redação',
        colaboradores: [
			{ nome: 'Varys, the Spider', funcao: 'Diretor Geral de Jornalismo' },
			{ nome: 'Litlefinger', funcao: 'Diretor Geral de Jornalismo' },
			{ nome: 'Tyrion Lannister', funcao: 'Coordenação' },
			{ nome: 'Jorah Mormont', funcao: 'Editor Executivo' },
			{ nome: 'Meister Luwin', funcao: 'Revisão' },
			{ nome: 'Samwell Tarly', funcao: 'Textos' },
			{ nome: 'Bran Stark', funcao: 'Fotos' },
		]
	},
	{
        secao: 'Desenvolvimento',
        colaboradores: [
			{ nome: 'Arenuza Goulart', funcao: 'Diretora de Novos Produtos' },
			{ nome: 'Aline Marques', funcao: 'Gerente de Novos Produtos' },
			{ nome: 'Breno Martins', funcao: 'Designer' },
			{ nome: 'Ramon Madeira', funcao: 'Ilustração' },
			{ nome: 'Jordão França', funcao: 'Vegetariano' },
			{ nome: 'Bruno Kitkat', funcao: 'Sommelier de shampoo' },
			{ nome: 'Rafhael de Oliveira', funcao: 'Front-end' },
		]
	}
];


const modalContent = [
	{
			wall: true,
			title: "Parede",
			img: '/cesio/img/modal/parede.png',
			topNormalText: 'Cada parede tem',
			topBoldText: "50cm de espessura",
			bottomNormalText: 'A caixa é hermeticamente fechada e construída para durar, no mínimo',
			bottomBoldText: '300 anos'
	},
	{
			wall: false,
			figureOnly: true,
			title: 'Capsula',
			img: '/cesio/img/modal/capsula.png'
	},
	{
			wall: false,
			title: 'SOLO',
			img: '/cesio/img/modal/solo-modal.png',
			text: 'Um dos motivos para o local ser escolhido foi a estrutura do solo, rochoso. No local funcionava uma pedreira do Estado, de onde era extraída brita'
	},
	{
			wall: false,
			title: 'ÁGUA SUBTERRÂNEA',
			img: '/cesio/img/modal/agua-modal.png',
			text: 'São 4 tubos de 30 metros de profundidade que atingem o lençol freático em pontos estratégicos do depósito para captação e monitoramento da água'
	}
];


class TimeLineDate {
	constructor(date, content){
		this.date = date;
		this.content = (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<Title 
							title={`${moment(this.date).format("DD")} de ${moment(this.date).format("MMMM")}`}
							color={colors.textPrimary}
						/>
					</div>
					{content.map((item, index) => {
						return (
							<div className={`col-sm-${12 / content.length} col-xs-12`} key={index}>
								{item.type === "Text" ?
									<Text
										text={item.props.text}
									/>
									:
									<Image
										src={item.props.src}
									/>					
								}
							</div>
						)
					})}
					
				</div>
			</div>
		)
	}
}

const datesTimeLine = [
	new TimeLineDate("1987-09-13", [
		{
			type: "Text", 
			props: {
				text: "Roberto dos Santos Alves e Wagner Mota Pereira removem a unidade de cesioterapia do Instituto Goiano de Radioterapia, na Avenida Paranaíba. Eles tentam separar o chumbo da parte que continha a fonte radioativa. Wagner, usando ferramentas inadequadas, consegue romper a “janela de irídio” de 1 mm de espessura, da fonte de césio, no quintal da casa de Roberto (Rua 57, Setor Central)"
			}
		}
	]),
	new TimeLineDate("1987-09-15", [
		{
			type: "Image", 
			props: {
				src: "http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg"
			}
		},
		{
			type: "Text", 
			props: {text: "Wagner procura assistência médica, com queimaduras na mão e no braço"}
		}
	]),
	new TimeLineDate("1987-09-19", [
		{
			type: "Text", 
			props: {
				text: "Roberto e Wagner vendem parte da peça a Devair Alves Ferreira (Rua 26A, Setor Aeroporto). Israel Batista dos Santos e Admilson Alves de Souza (funcionários) manuseiam a fonte"
			}
		}
	]),
	new TimeLineDate("1987-09-21", [
		{
			type: "Text", 
			props: {
				text: "Devair põe parte da fonte na sala de sua casa e distribui fragmentos do pó a parentes e amigos. Maria Gabriela, mulher de Devair, é examinada no Hospital São Lucas (Rua 4, Centro), com vômitos e diarreia"
			}
		}
	]),
	new TimeLineDate("1987-09-23", [
		{
			type: "Text", 
			props: {
				text: "Wagner é internado no Hospital Santa Rita, onde fica por 4 dias"
			}
		}
	]),
	new TimeLineDate("1987-09-24", [
		{
			type: "Text", 
			props: {
				text: "Ivo Alves Ferreira, irmão de Devair, entra em contato com o césio (Rua 6, Setor Norte Ferroviário). Leide das Neves, fi lha de Ivo, come um ovo com césio. A blindagem de chumbo e parte do equipamento são transportadas para a Rua P19, Setor dos Funcionários"
			}
		}
	]),
	new TimeLineDate("1987-09-26", [
		{
			type: "Text", 
			props: {
				text: "Kardec Sebastião dos Santos leva o cabeçote de cerca de 300kg do Instituto Goiano de Radioterapia para o ferro velho II, de Ivo Alves. Maria Gabriela, que chega de viagem, fi ca exposta à radiação no interior de sua residência"
			}
		}
	]),
	new TimeLineDate("1987-09-28", [
		{
			type: "Image", 
			props: {
				src: "http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg"
			}
		},
		{
			type: "Text", 
			props: {
				text: "Geraldo Guilherme da Silva, empregado do ferro velho de Devair, e Maria Gabriela levam em saco plástico, de ônibus do transporte coletivo, a peça do Setor dos Funcionários até a Vigilância Sanitária de Goiânia (Rua 16A, Setor Central). Geraldo carrega a fonte no ombro por duas quadras. Wagner é transferido em caminhão até o Hospital de Doenças Tropicais. Três médicos o recebem e internam. O médico Alonso Monteiro, da Vigilância Sanitária, pede a presença de um físico, suspeitando de contato com material radioativo"
			}
		}
	]),
	new TimeLineDate("1987-09-29", [
		{
			type: "Image", 
			props: {
				src: "http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg"
			}
		},
		{
			type: "Text", 
			props: {
				text: "Os físicos Walter Mendes, da Secretaria de Saúde, e Sebastião Maia, da Nuclebrás, verificam que o material é radioativo e vão ao secretário de Saúde, Antônio Faleiros, que aciona a Comissão Nacional de Energia Nuclear (CNEN)"
			}
		}
	]),
	new TimeLineDate("1987-09-30", [
		{
			type: "Text", 
			props: {
				text: `O diretor do Departamento de Instalações Nucleares da CNEN, José de Júlio Rozental, chega à 0h30 a Goiânia e ainda na madrugada envia sua primeira avaliação à CNEN.
				
				É acionado o plano de emergência, do qual participam CNEN, Furnas, Nuclebrás, Defesa Civil e a ala de emergência nuclear do Hospital Naval Marcílio Dias, no Rio de Janeiro.`
			}
		}
	]),
];

const galleryContent = [
	{
		img: '/cesio/img/gallery/foto001.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto002.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto003.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto004.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto005.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto006.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto007.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto008.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto009.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto010.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto011.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto012.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto013.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto014.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto015.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto016.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto017.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto018.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto019.jpg',
		description: 'Comida de Vó'
	},
	{
		img: '/cesio/img/gallery/foto020.jpg',
		description: 'Comida de Vó'
	},
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

const monitoringResources = ['Sedimentos', 'Água subterrânea', 'Solo', 'Vegetação', 'Água superficial',];

function Components() {
	return (


		<div className="container-fluid">

			{/* <Section fullWidth={true}>
				<Hero
					poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"
					webm="http://thenewcode.com/assets/videos/polina.webm"
					mp4="http://thenewcode.com/assets/videos/polina.mp4"
					title="Césio 137: o pesadelo azul"
					subtitle="O maior acidente radiológico do mundo completa 30 anos"
				/>
			</Section> */}

			<Section>
				<div className="col-sm-12 col-xs-12">
						<Title 
							title="Expediente"
							color={colors.primary}
						/>
				</div>
				<div className="col-xs-12">
					<Expediente exped={exped} />
				</div>
			</Section>

			<Section  fullWidth={true}>
				<div className="row">
					<div className="col-xs-12">
						<div className="col-sm-12 col-xs-12">
								<Title 
									title="Objetivos da monitoração.&#13;&#10;(a cada seis meses)"
									color={colors.primary}
								/>
						</div>
						<BgContainer
							color="#2a6aff"
						>
							<Section>
								<Goals  
									goals={goals}
								/>
							</Section>

						</BgContainer>
					</div>
				</div>
			</Section>


			<Section>
				<div className="col-sm-12 col-xs-12">
						<Title 
							title="Countdown"
							color={colors.primary}
						/>
				</div>
				<div className="col-sm-12 col-xs-12">
					<Countdown  		
					/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
						<Title 
							title="Olho"
							color={colors.primary}
						/>
				</div>
				<div className="col-md-9 col-xs-12">
						<Text
								text={text}
								eye={true}
						/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
						<Title 
							title="Texto uma coluna"
							color={colors.primary}
						/>
				</div>
				<div className="col-md-9 col-xs-12">
						<Text
								text={text}
						/>
				</div>
				<div className="col-md-9 col-xs-12">
						<Text
								text={text}
						/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
					<Title 
						title="Texto duas colunas"
							color={colors.primary}
						/>
				</div>
				<div className="col-md-9 col-xs-12">
					<div className="row">
						<div className="col-sm-6 col-xs-12">
							<Text
								text={text}
							/>
						</div>
						<div className="col-sm-6 col-xs-12">
							<Text
								text={text}
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section fullWidth={true}>
				<BgContainer
					color="#cccccc"
				>
					<Video
						sources={["http://www.quirksmode.org/html5/videos/big_buck_bunny.webm",
						"http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4"]}
					/>
				</BgContainer>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
					<Title 
						title="Quotes"
						color={colors.primary}
					/>
					<Quotes
						text={text}
						author={author}
					/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
					<Title 
						title="Image + Legenda"
							color={colors.primary}
						/>
					<Image
						src="http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg"
						subtitle={subtitle}
					/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
					<Title title="Image + Legenda [Retangular]" />
					<Image
						src="http://www.funny-animalpictures.com/media/content/items/images/funnydogs0063_O.jpg"
						subtitle='Devair Alves Ferreira.'
						rectangle={true}
					/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-12 col-xs-12">
					<Title title="Imagem + Texto" />
				</div>
				<div className="col-sm-6 col-xs-12">
					<Image
						src="http://i0.kym-cdn.com/entries/icons/facebook/000/014/959/Screenshot_116.jpg"
					/>
				</div>
				<div className="col-sm-6 col-xs-12">
					<Text
						text={text}
					/>
				</div>
			</Section>

			<Section fullWidth={true}>
				<BgContainer 
					color="#cccccc"
					img={{url: '/cesio/img/concrete-pattern.png', repeat: true}}
				>
					<Section>
						<div className="col-xs-12">
							<Title 
								title="História enterrada" 
								type={1} 
								color={colors.vibrantBlue} 
							/>
						</div>
						<div className="col-xs-12">
							<Title 
								title="Apenas 19,26 gramas de cloreto de césio 137 presentes na cápsula de 3 centímetros foram suficientes para gerar 6 mil toneladas de rejeitos, que estão abrigados no depósito de Abadia de Goiás, onde ficarão por 300 anos." 
								type={2}
							/>
						</div>
						<div className="col-xs-12">
							<Capsule />
						</div>
						<div className="col-xs-12">
							<Title 
								title="Porções do pó radioativo foram distribuídos em área superior a " 
								type={2}
								color={colors.primary}
								fontStyle="normal"
								fontWeight="bold"
							/>
						</div>
						<div className="col-xs-12">
							<Title 
								title="2 mil m²" 
								type={1}
							/>
						</div>
						<div className="col-xs-12">
							<Title 
								title=" a partir do Centro de Goiânia" 
								type={2}
								color={colors.primary}
								fontStyle="normal"
								fontWeight="bold"
							/>
						</div>
						<div className="col-sm-12 col-xs-12">
							<Title 
								title="Rejects"
								type={1} 
								color={colors.primary} 
							/>
						</div>
						<div className="col-xs-12">
							<Rejects  />
						</div>
						<div className="col-xs-12">
							<Title 
								title="Dimensões" 
								type={1} 
								color={colors.primary} 
							/>
						</div>
						<div className="col-xs-12">
							<ImgModal  data={modalContent} />
						</div>
					</Section>
				</BgContainer>
			</Section>

			 <Section >
				<div className="col-sm-12 col-xs-12">
					<Title 
						title="Deposito"
						color={colors.primary}
					/>
				</div>
				<div className="col-sm-12 col-xs-12">
					<Deposit />
				</div>
			</Section> 
			 <Section >
				<div className="col-sm-12 col-xs-12">
					<Title 
						title="Timeline"
						color={colors.primary}
					/>
				</div>
				<div className="col-sm-12 col-xs-12">
					<Timeline
						dates={datesTimeLine}
					/>
				</div>
			</Section> 

			 <Section fullWidth={true}>
				<BgContainer 
					color="#cccccc"
					img={{url: '/cesio/img/concrete-pattern.png', repeat: true}}
				>
					<div className="row center-xs">
						<div className="col-xs-12">
							<Title 
								title="DIMENSÕES" 
								color={colors.primary} 
							/>
							<Title 
								title="A grande caixa de concreto erguida a partir do&#13;&#10;nível do solo possui:" 
								type={2} 
								fontStyle="italic"
								fontWeight="300"
								color={colors.textPrimary} 
							/>
						</div>
						<div className="col-xs-12">
							<ImgModal  data={modalContent} />
						</div>

						<div className="col-xs-12">
							<Title 
								title="MONITORAMENTO" 
								color={colors.primary} 
							/>
						</div>
						<Section>
							<div className="col-xs-12">
								<Monitoring 
									text="O Programa de Monitoramento Ambiental faz análises trimestrais e recolhe&#13;&#10;matrizes de:"
									monitoringResources={monitoringResources} 
								/>
							</div>
						</Section>
					</div>
				</BgContainer>
			</Section> 

			 <Section fullWidth={true}>
				<div className="col-sm-12 col-xs-12">
					<Title 
						title="Gallery"
						color={colors.primary}
					/>
					<Gallery images={galleryContent}/>
				</div>
			</Section> 

		</div>
	);
}

export default Components;