import React 					from 'react';
import { Link }       from 'react-router-dom';
// resources
import { colors } 		from '../../resources/styles/colors';
// components
import Banner 				from '../../components/banner/Banner.jsx';
import BgContainer 		from '../../components/bg-container/BgContainer.jsx';
import Capsule				from '../../components/capsule/Capsule.jsx';
import Deposit 				from '../../components/deposit/Deposit.jsx';
import Expediente 		from '../../components/expediente/Expediente.jsx';
import Section 				from '../../components/section/Section.jsx';
import Gallery 				from '../../components/gallery/Gallery.jsx';
import Image 					from '../../components/image/Image.jsx';
import ImgModal 			from '../../components/img-modal/ImgModal.jsx';
import Monitoring			from '../../components/monitoring/Monitoring.jsx';
import Rejects 				from '../../components/rejects/Rejects.jsx';
import Text 					from '../../components/text/Text.jsx';
import Title 					from '../../components/title/Title.jsx';
import Timeline				from '../../components/timeline/Timeline.jsx';
import VideoYoutube		from '../../components/video-youtube/VideoYoutube.jsx';

// SVGS
import TweentyNine 		from '../../resources/img/29-set.svg';
import TweentyEight 	from '../../resources/img/28-set.svg';
import Fithteen 			from '../../resources/img/15-set.svg';
import Thirteen 			from '../../resources/img/13-17-set.svg';

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

const modalContent = [
	{
			wall: true,
			title: "Parede",
			img: `${process.env.PUBLIC_URL}/img/modal/parede.png`,
			topNormalText: 'Cada parede tem',
			topBoldText: "50cm de espessura",
			bottomNormalText: 'A caixa é hermeticamente fechada e construída para durar, no mínimo',
			bottomBoldText: '300 anos'
	},
	{
			wall: false,
			figureOnly: true,
			title: 'Cápsula',
			img: `${process.env.PUBLIC_URL}/img/modal/capsula.png`,
			text: 'A fonte de radiação está dentro de uma manilha de concreto, coberta com mais concreto, colocada em um cilindro de aço lacrado.'
	},
	{
			wall: false,
			title: 'SOLO',
			img: `${process.env.PUBLIC_URL}/img/modal/solo-modal.png`,
			text: 'Um dos motivos para o local ser escolhido foi a estrutura do solo, rochoso. No local funcionava uma pedreira do Estado, de onde era extraída brita'
	},
	{
			wall: false,
			title: 'ÁGUA SUBTERRÂNEA',
			img: `${process.env.PUBLIC_URL}/img/modal/agua-modal.png`,
			text: 'São 4 tubos de 30 metros de profundidade que atingem o lençol freático em pontos estratégicos do depósito para captação e monitoramento da água'
	}
];

class TimeLineDate {
	constructor(date, content){
		this.date = date;
		this.content = (
			<div className="container-fluid">
				<div className="row">
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
	new TimeLineDate("13", [
		{
			type: "Text", 
			props: {
				text: "Roberto dos Santos Alves e Wagner Mota Pereira removem a unidade de cesioterapia do Instituto Goiano de Radioterapia, na Avenida Paranaíba. Eles tentam separar o chumbo da parte que continha a fonte radioativa. Wagner, usando ferramentas inadequadas, consegue romper a “janela de irídio” de 1 mm de espessura, da fonte de césio, no quintal da casa de Roberto (Rua 57, Setor Central)"
			}
		},
		{
			type: "Image", 
			props: {
				src: Thirteen
			}
		}
	]),
	new TimeLineDate("15", [
		{
			type: "Image", 
			props: {
				src: Fithteen
			}
		},
		{
			type: "Text", 
			props: {text: "Wagner procura assistência médica, com queimaduras na mão e no braço"}
		}
	]),
	new TimeLineDate("19", [
		{
			type: "Text", 
			props: {
				text: "Roberto e Wagner vendem parte da peça a Devair Alves Ferreira (Rua 26-A, Setor Aeroporto). Israel Batista dos Santos e Admilson Alves de Souza (funcionários) manuseiam a fonte"
			}
		}
	]),
	new TimeLineDate("21", [
		{
			type: "Text", 
			props: {
				text: "Devair põe parte da fonte na sala de sua casa e distribui fragmentos do pó a parentes e amigos. Maria Gabriela, mulher de Devair, é examinada no Hospital São Lucas (Rua 4, Centro), com vômitos e diarreia"
			}
		}
	]),
	new TimeLineDate("23", [
		{
			type: "Text", 
			props: {
				text: "Wagner é internado no Hospital Santa Rita, onde fica por 4 dias"
			}
		}
	]),
	new TimeLineDate("24", [
		{
			type: "Text", 
			props: {
				text: "Ivo Alves Ferreira, irmão de Devair, entra em contato com o césio (Rua 6, Setor Norte Ferroviário). Leide das Neves, filha de Ivo, come um ovo com césio. A blindagem de chumbo e parte do equipamento são transportadas para a Rua P19, Setor dos Funcionários"
			}
		}
	]),
	new TimeLineDate("26", [
		{
			type: "Text", 
			props: {
				text: "Kardec Sebastião dos Santos leva o cabeçote de cerca de 300kg do Instituto Goiano de Radioterapia para o ferro velho II, de Ivo Alves. Maria Gabriela, que chega de viagem, fi ca exposta à radiação no interior de sua residência"
			}
		}
	]),
	new TimeLineDate("28", [
		{
			type: "Image", 
			props: {
				src: TweentyEight
			}
		},
		{
			type: "Text", 
			props: {
				text: "Geraldo Guilherme da Silva, empregado do ferro velho de Devair, e Maria Gabriela levam em saco plástico, de ônibus do transporte coletivo, a peça do Setor dos Funcionários até a Vigilância Sanitária de Goiânia (Rua 16A, Setor Central). Geraldo carrega a fonte no ombro por duas quadras. Wagner é transferido em caminhão até o Hospital de Doenças Tropicais. Três médicos o recebem e internam. O médico Alonso Monteiro, da Vigilância Sanitária, pede a presença de um físico, suspeitando de contato com material radioativo"
			}
		}
	]),
	new TimeLineDate("29", [
		{
			type: "Image", 
			props: {
				src: TweentyNine
			}
		},
		{
			type: "Text", 
			props: {
				text: "Os físicos Walter Mendes, da Secretaria de Saúde, e Sebastião Maia, da Nuclebrás, verificam que o material é radioativo e vão ao secretário de Saúde, Antônio Faleiros, que aciona a Comissão Nacional de Energia Nuclear (CNEN)"
			}
		}
	]),
	new TimeLineDate("30", [
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
		img: `${process.env.PUBLIC_URL}/img/gallery/foto001.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto002.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto003.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto004.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto005.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto006.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto007.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto008.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto009.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto010.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto011.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto012.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto013.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto014.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto015.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto016.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto017.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto018.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto019.jpg`,
		description: 'Acervo O Popular'
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/foto020.jpg`,
		description: 'Acervo O Popular'
	},
];

const monitoringResources = ['Sedimentos', 'Água subterrânea', 'Solo', 'Vegetação', 'Água superficial',];

function Past() {
	return (

		<div className="container-fluid">
			 <section style={{marginBottom: 90}} >
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/capa/capa_passado.jpg`, overlay: true}}
					height="690px"
					hero={true}
				>
				<div className="row center-xs middle-xs">
					<div className="col-xs-12">
						<div className="row center-xs">
							<div className="col-sm-10 col-xs-12">
								<Title 
									title="Contaminação espalhada na cidade"
									type={1}
									color={colors.primary}
								/>
							</div>
							<div className="col-sm-8 col-xs-12">
								<Title
									title="Diversos pontos de Goiânia e até de outros municípios foram atingidos pelo césio 137. A circulação de pessoas contaminadas e a demora em identificar a ocorrência do acidente radiológico favoreceram a situação"
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

		<Section className="row">
				<div className="col-md-9 col-xs-11">
					<Text
						text="Por 16 dias, pessoas contaminadas circularam pela cidade, visitaram parentes em outros municípios, trabalharam, andaram de ônibus e espalharam a radiação. Por 16 dias, o césio 137 foi dividido, manuseado, jogado no vaso sanitário e até ingerido. O período transcorrido entre a abertura da cápsula contendo a substância e a confirmação oficial desafiou a capacidade de controle, de identificação dos locais atingidos e até mesmo de dimensionamento da tragédia."
					/>
				</div>
			</Section>
			<Section className="row">
				<div className="col-md-9 col-xs-11">
					<Text
						text="O primeiro passo foi relacionar e isolar todos aqueles que tiveram contato direto com o césio e levantar, a partir dos relatos de cada um, os locais visitados e as pessoas com as quais eles se encontraram. Diante do contexto, as buscas terrestres iniciadas pelos técnicos da Comissão Nacional de Energia Nuclear (Cnen) precisaram ser acrescidas do método de levantamento aeroradiométrico. Foram identificados, ao todo, oito pontos principais de contaminação, 46 residências que tiveram de ser descontaminadas e 45 endereços que sofreram contaminação residual."
					/>
				</div>
			</Section>
			<Section className="row">
				<div className="col-md-9 col-xs-11">
					<Text
						text="Locais com níveis anormais de radiação foram descobertos até o fim do mês de outubro de 1987, ou seja, um mês após o conhecimento oficial de que estava ocorrendo um acidente radiológico em Goiânia. A partir do relatório do ex-presidente da Cnen, Rex Nazaré Alves, entregue em março de 1988 ao Senado, é possível mensurar a maneira como o césio se espalhou pela cidade. Pontos de contaminação variados, como calçadas, pedaços de muro, pontos de ônibus, meios-fios e trechos de ruas foram identificados durante a fase de levantamento. "
					/>
				</div>
			</Section>
			<Section className="row">
				<div className="col-md-9 col-xs-11">
					<Text
						text="Dos oito pontos principais de contaminação, sete foram isolados imediatamente e um último, a sede da Copel Recicláveis, no Setor Santa Genoveva, foi descoberta posteriormente por ter recebido papéis contaminados. Esses sete locais estavam no Centro e nos setores Aeroporto, Norte Ferroviário e Dos Funcionários, incluindo os lotes que tiveram de ser desocupados e concretados, como o da Rua 57, casa de Roberto dos Santos Alves e onde foi aberta a cápsula contendo o césio, e o da Rua 26-A, onde ficava o ferro-velho de Devair Alves Ferreira."
					/>
				</div>
			</Section> 

			 <Section>
				<div className="col-sm-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/passado/devair.jpg`}
						subtitle="Devair Alves Ferreira."
					/>
				</div>
			</Section> 

			 <Section className="row">
				<div className="col-md-9 col-xs-11">
					<Text
						text="Entre as casas contaminadas, além das 36 localizadas em Goiânia, três ficavam em Aparecida de Goiânia, cinco em Anápolis e duas em Inhumas. Do total de residências, 20 eram vizinhas aos focos principais de contaminação e os moradores foram imediatamente retirados assim que o acidente foi descoberto. As residências da capital eram de bairros, como: Setor Aeroporto, Centro, Setor Marechal Rondon, Norte Ferroviário, Jardim Lageado, Setor Pedro Ludovico, Jardim América, Vila São Pedro Guapó e Santa Helena."
					/>
				</div>
			</Section> 

			<Section>
				<Banner bannerIndex={1} />
			</Section>

			<Section fullWidth={true}>
				<BgContainer
					color="#000000"
				>
					<div className="row center-xs">
						<div className="col-md-9 col-xs-12">
							<VideoYoutube
								videoID="tm6qsSFC-hE"
								title="Depoimento Luiza Odet (Vítima)"
							/>
						</div>
					</div>
				</BgContainer>
			</Section>

			<Section className="row">
				<div className="col-md-9 col-xs-11" style={{marginTop: 40}}>
					<Title 
						title="SETOR BUENO E ALEGO" 
						color={colors.primary} 
					/>
				</div>
			</Section> 
			 <Section className="row">
				<div className="col-md-9 col-xs-11">
					<Text
						text="Os logradouros atingidos pela circulação de pessoas e objetos contaminados se multiplicaram pela cidade e foram ainda mais difíceis de serem identificados, pois não eram locais bem definidos. Eram pontos variados, como a Alameda dos Buritis, no trecho em frente à Assembleia Legislativa, um local próximo ao número 1.234 da Avenida T-2, no Setor Bueno, ou parte da calçada e do ponto de ônibus de uma esquina da Avenida Independência com uma rua do Setor Aeroporto. Os resíduos do césio chegaram ainda às avenidas Goiás e Anhanguera."
					/>
				</div>
			</Section>
			<Section className="row">
				<div className="col-md-9 col-xs-11 m-bottom70">
					<Text
						text="O rastreamento era feito para identificar as taxas de radiação superiores à chamada radiação natural de fundo. A parte aeroradiométrica foi feita durante dois dias em loteamentos de bairros periféricos, no campus da Universidade Federal de Goiás (UFG) e no autódromo, tendo descoberto apenas mais um ponto além dos que já haviam sido identificados."
					/>
				</div>
			</Section> 

			  <Section fullWidth={true} className="row" style={{marginTop: 120}}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/concrete-pattern.png`, repeat: true}}
				>
					<section style={{marginTop: 60}}>
						<div className="row center-xs">

							<div className="col-md-8 col-xs-11">
								<Title 
									title="História enterrada" 
									type={1} 
									color={colors.vibrantBlue} 
								/>
							</div>
							<div className="col-md-8 col-xs-11" style={{marginBottom: 45}}>
								<Title 
									title="Apenas 19,26 gramas de cloreto de césio 137 presentes na cápsula de 3 centímetros foram suficientes para gerar 6 mil toneladas de rejeitos, que estão abrigados no depósito de Abadia de Goiás, onde ficarão por 300 anos." 
									type={2}
								/>
							</div>
							<div className="col-md-8 col-xs-11">
								<Capsule />
							</div>
							<div className="col-md-8 col-xs-11" style={{marginTop: 20}}>
								<Title 
									title="Partes e porções do pó radioativo foram distribuídos em área superior a " 
									type={2}
									color={colors.primary}
									fontStyle="normal"
									fontWeight="bold"
								/>
							</div>
							<div className="col-md-8 col-xs-11">
								<Title 
									title="2 mil m²" 
									type={1}
								/>
							</div>
							<div className="col-md-8 col-xs-11">
								<Title 
									title=" a partir do Centro de Goiânia" 
									type={2}
									color={colors.primary}
									fontStyle="normal"
									fontWeight="bold"
								/>
							</div>
							<div className="col-md-6 col-xs-11"  style={{marginTop: 85}}>
								<Rejects  />
							</div>
						</div>
					</section>
				</BgContainer>
			</Section>  

			<Section>
				<Banner bannerIndex={2} />
			</Section>

			 <Section>
				<div className="col-sm-12 col-xs-11">
					<Title 
						title="Depósito"
						color={colors.primary}
					/>
				</div>
				<div>
					<Deposit />
				</div>
			</Section>   

			 <Section fullWidth={true}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/concrete-pattern.png`, repeat: true}}
				>
				
				<section>
					<div className="row center-xs">
						<div className="col-sm-12 col-xs-11">
							<Title 
								title="DIMENSÕES"
								color={colors.primary}
							/>
						</div>

						<div className="col-sm-6 col-xs-11">
							<Title 
								title="A grande caixa de concreto erguida a partir do nível do solo possui:"
								type={2}
								color={colors.textPrimary}
								fontStyle="italic"
							/>
						</div>
						<div className="col-xs-11">
							<ImgModal  data={modalContent} />
						</div>
						<div className="col-sm-12 col-xs-11">
							<Title 
								title="monitoramento"
								color={colors.primary}
							/>
						</div>
						<Section>
							<div className="col-xs-11">
								<Monitoring 
									text="O Programa de Monitoramento Ambiental faz análises trimestrais e recolhe&#13;&#10;matrizes de:"
									monitoringResources={monitoringResources} 
								/>
							</div>
						</Section>
					</div>
				</section>
				</BgContainer>
			</Section>   

			<Section className="row">
			 	<div className="col-sm-9 col-xs-11"  style={{paddingTop: 30}}>
					<Title 
						title="O CAMINHO DA CÁPSULA"
						color={colors.primary}
					/>
				</div>
				<div className="col-sm-9 col-xs-11">
					<Title 
						title="Setembro de 1987"
						type={2}
					/>
				</div>
				<div className="col-sm-12 col-xs-11" style={{paddingBottom: 50}}>
					<Timeline
						dates={datesTimeLine}
					/>
				</div>
			</Section>   

			<Section fullWidth={true}>
				<BgContainer
					color="#000000"
				>
					<div className="row center-xs">
						<div className="col-md-9 col-xs-12">
							<VideoYoutube
								videoID="lptNSmrG0qQ"
								title="Depoimento Luiza Odet (Vítima)"
							/>
						</div>
					</div>
				</BgContainer>
			</Section>

			<Section>
				<Banner bannerIndex={3}/>
			</Section>

			 <section  className="row center-xs">
				<div className="col-md-9 col-xs-11">
					<Title 
						title="Galeria"
						color={colors.primary}
					/>
					<Gallery images={galleryContent}/>
				</div>
			</section>   

			<Section className="row">
				<div className="col-xs-11">
					<Expediente exped={exped} />
				</div>
			</Section>

			<section>
				<Link to="/hoje">
					<BgContainer 
						color="#cccccc"
						img={{url: `${process.env.PUBLIC_URL}/img/capa/capa_presente.jpg`, overlay: true}}
						hero={true}
						bgMobilePosition='91%'
					>
					<div className="row center-xs middle-xs" style={{height: 690}}>
						<div className="col-xs-12">
							<div className="row center-xs">
								<div className="col-sm-10 col-xs-12">
									<Title 
										beforeTitle="LEIA TAMBÉM:"
										title="HOJE"
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

export default Past;