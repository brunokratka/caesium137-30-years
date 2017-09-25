import React 					from 'react';
import { Link }       from 'react-router-dom';
// resources
import { colors } 		from '../../resources/styles/colors';
// components
import Banner 				from '../../components/banner/Banner.jsx';
import BgContainer 		from '../../components/bg-container/BgContainer.jsx';
import Expediente 		from '../../components/expediente/Expediente.jsx';
import Gallery 				from '../../components/gallery/Gallery.jsx';
import Image 					from '../../components/image/Image.jsx';
import Quotes 				from '../../components/quotes/Quotes.jsx';
import Section 				from '../../components/section/Section.jsx';
import Text 					from '../../components/text/Text.jsx';
import Title 					from '../../components/title/Title.jsx';
import VideoYoutube 	from '../../components/video-youtube/VideoYoutube.jsx';

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
const galleryContent = [
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente001.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente002.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente003.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente004.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente005.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente006.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente007.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente008.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente009.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente010.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente011.jpg`,
    description: 'Depósito de rejeitos do césio-137 em Abadia de Goiás' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente013.jpg`,
    description: 'Túmulo onde foi enterrada a menina Leide das Neves' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente014.jpg`,
    description: 'Túmulo onde foi enterrada a menina Leide das Neves' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente015.jpg`,
    description: 'Imagem atual do local onde funcionava o ferro-velho' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente016.jpg`,
    description: 'Imagem atual do local onde funcionava o ferro-velho' 
	},
	{
		img: `${process.env.PUBLIC_URL}/img/gallery/presente017.jpg`,
    description: 'Imagem atual do local onde funcionava o ferro-velho' 
	}
];

function Present() {
	return (
		<div className="container-fluid">
			<section style={{marginBottom: 90}}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/capa/capa_presente.jpg`, overlay: true}}
					height="690px"
					hero={true}
					bgMobilePosition='91%'
				>
				<div className="row center-xs middle-xs">
					<div className="col-xs-12">
						<div className="row center-xs">
							<div className="col-sm-10 col-xs-12">
								<Title 
									title="O rastro de câncer na região do césio"
									type={1}
									color={colors.primary}
								/>
							</div>
							<div className="col-sm-8 col-xs-12">
								<Title
									title="Trinta e nove pessoas foram diagnosticadas com câncer em uma das regiões mais afetadas pelo acidente radiológico de 1987. Relacionar casos à radiação ainda é difícil por se tratar de doença multicausal "
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

			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="Três décadas se passaram e a memória daqueles dias de setembro e outubro de 1987 continua viva entre os que testemunharam a tragédia do césio 137, em Goiânia. Mas não só de recordações resistem as marcas do maior acidente radiológico do mundo, ocorrido fora de uma usina nuclear. A saúde de centenas de pessoas foi abalada pelos efeitos nocivos da substância e ainda hoje, 30 anos depois, a possibilidade do diagnóstico de câncer continua a atormentar quem morava perto dos locais contaminados, teve algum contato com o césio ou foi alvo de radiação."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="Pelo menos 39 pessoas da região da Rua 26-A, no Setor Aeroporto, hoje chamada de Rua Francisca da Costa Cunha, já tiveram a doença. A maioria morreu e alguns ainda enfrentam as complicações, residindo nos mesmos locais da época."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="Levantamento feito pelo POPULAR em parceria com a presidente da Associação das Vítimas do Césio 137 (AVCésio), Suely Lina Moraes Silva, que também tem casa na região, chegou ao número após uma série de visitas, preenchimento de questionários e entrevistas com familiares e pessoas ainda vivas."
					/>
				</div>
			</Section>

			<Section>
				<div className="col-sm-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/presente/suely.jpg`}
						subtitle="Suely Lina Moraes Silva."
					/>
				</div>
			</Section>

			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="A Rua 26-A foi um dos principais focos de radiação da época, já que abrigava o ferro-velho de Devair Alves Ferreira, nos lotes 29 e 30 da Quadra Z. Ele foi o primeiro a comprar as peças do aparelho que continha a cápsula de césio, depois que elas foram retiradas do prédio abandonado do Instituto Goiano de Radioterapia por Roberto dos Santos Alves e Wagner Mota Pereira. A partir de então a pedra de césio foi partida, dividida em porções e levada para outros lugares, multiplicando o número de  pessoas que tiveram contato com a substância, principalmente moradores da região."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-sm-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/presente/lote26a.png`}
						subtitle="Rua 26-A, Setor Aeroporto."
						rectangle={true}
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="Entre 1987 e setembro de 2004, O POPULAR veiculou reportagem exclusiva revelando que casos de câncer já haviam afetado 18 moradores da área de acidente, segundo levantamento também feito pela presidente da AVCésio. De 2004 para cá, em 13 anos, mais 21 pessoas foram afetadas pela doença, considerando somente aquelas que sempre viveram no local ou que tinham residência nas proximidades durante os dias em que ocorreu o acidente radiológico. "
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="O total de 39 casos da doença em um perímetro que tem cerca de 920 moradores – cálculo feito conforme a média goianiense de habitantes por residência (3,1) - equivale à proporção de 4,3% das pessoas da região. Mas como o índice foi atingido ao longo de três décadas não é possível  uma comparação com estimativas do Instituto Nacional de Câncer (Inca), que são anuais. Para o biênio 2016-2017, por exemplo, o Inca estimou que 596 mil casos de câncer seriam identificados por ano, no Brasil (0,28% da população). Em Goiás, este índice anual seria de 0,26% e em Goiânia 0,15%."
					/>
				</div>
			</Section>

			<Section>
				<Banner bannerIndex={1}/>
			</Section>

			 <Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title='"É DEMAIS"'
						color={colors.primary}
					/>
				</div>
			</Section> 

			<Section>
				<div className="col-md-9 col-xs-11" style={{marginBottom: 60}}>
					<Quotes
						text="Outro dia eu estava comentando: parece que o mundo inteiro está caindo de câncer, porque é demais. A gente fica sabendo de muitos casos aqui na região. Está uma coisa meio assombrosa"
						author="Maria José de Moura, 83 anos."
					/>
				</div>
			</Section>

			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="O que chama a atenção na região do césio é a recorrência de casos, que coincidem inclusive com os endereços das casas e logradouros que tiveram algum nível de contaminação. A reportagem visitou esses locais, relacionados em relatório do físico nuclear e ex-presidente da Comissão Nacional de Energia Nuclear (CNEN), Rex Nazaré Alves, que foi encaminhado ao Senado Federal em março de 1988. Em todos os endereços, onde ainda vivem os mesmos moradores da época, foi diagnosticado nesses 30 anos pelo menos um caso de câncer."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="No número 218, da Rua 15-A, o filho da dona Lourdes Barcellos, 87, faleceu há cinco anos de câncer nos ossos. No número 722 da Avenida Oeste, a mãe e a irmã da balconista Rosângela Santos, 49, morreram de câncer no sangue e no pulmão, respectivamente. No número 660 também na Avenida Oeste, a dona Doralina Alves, 82, já enfrenta o câncer pela segunda vez - primeiro foi na mama, agora no pulmão. Na esquina da Rua 26-A com a Avenida Oeste, onde a calçada foi contaminada, mora a aposentada Lindalra de Souza, 84, que já perdeu o marido e agora também lida com a doença."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="“Outro dia eu estava comentando: parece que o mundo inteiro está caindo de câncer, porque é demais. A gente fica sabendo de muitos casos aqui na região. Está uma coisa meio assombrosa”, afirma a aposentada Maria José de Moura, 83, que mora na Rua 26-A com as duas sobrinhas que também estão na relação das 39 pessoas. Ana Carla e Iraildes Barbosa de Moura, que são irmãs, de 48 e 50 anos cada, foram diagnosticadas com câncer no útero e residem no mesmo local, a dois lotes de onde era o ferro-velho do Devair, há mais de quatro décadas."
					/>
				</div>
			</Section>


			<Section>
				<div className="col-sm-9 col-xs-11">
					<Image
						src={`${process.env.PUBLIC_URL}/img/presente/iraildes_ana.jpg`}
						subtitle="Iraildes Barbosa Moura e Ana Carla de Moura."
						rectangle={true}
					/>
				</div>
			</Section>
			 <Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="Traçar relação com o césio é algo difícil"
						color={colors.primary}
					/>
				</div>
			</Section>  
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="Na memória dos moradores da região da Rua 26-A, no Setor Aeroporto, persiste a informação dada à época pelos técnicos que atuaram no processo de descontaminação, de que o câncer em decorrência da radiação poderia se manifestar até 20, 30 anos depois."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="A coordenadora geral de Prevenção e Vigilância e integrante da Unidade Técnica de Exposição Ambiental, Ocupacional e Câncer do Instituto Nacional do Câncer (Inca), Ubirani Barros Otero, pontua que os casos mais prováveis resultantes de radiação seriam leucemia e câncer de tireoide. Os demais tumores exigiriam, segundo ela, um acompanhamento e análise maiores para traçar a relação. E mesmo assim, décadas depois, seria ainda mais complicado, pois o câncer, doença multicausal, pode ser acarretado simplesmente pela idade avançada da população."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="O fator que ainda gera alguma suspeita é o chamado período de latência do césio 137, que é aquele tempo, após a radiação, em que ainda é possível o surgimento de doenças. Além disso, como frisa a professora de Física das Radiações da Universidade de São Paulo (USP), Emico Okuno, o efeito da radiação é de longo prazo. “Na verdade, nunca se sabe quando é que esse efeito vai aparecer. Quanto maior a dose, mais cedo aparece, mas até hoje, 72 anos depois, ainda surge alguma pessoa em Hiroshima (Japão) com algum tipo de câncer”, cita."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text="Nota técnica enviada ao Ministério Público de Goiás (MP/GO) em dezembro de 2001 pela Fundação Nacional de Saúde (Funasa) informa que o tempo médio para surgimento de câncer em um acidente como o de Goiânia seria de 15 anos. A partir de 2002, estimava-se um crescimento progressivo dos diagnósticos. Em 2005, no documento chamado Carta de Goiânia, feito pelo Fórum Permanente de Prevenção e Controle de Acidentes Radiológicos e Nucleares (Focar), foi relatado que as piores consequências seriam verificadas até um período de latência de 30 anos."
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11"  style={{marginTop: 60, marginBottom: 60}}>
					<Quotes
						text="Pode acontecer, claro. E o que a gente preconiza é que as pessoas precisam ser acompanhadas e cada caso analisado. A média de surgimento de alguns tumores sólidos é de 20 anos, mas pode ser antes ou pode ser depois. Tem tumor que aparece 30, 40 anos depois"
						author="Ubirani Barros"
					/>
				</div>
			</Section>

			<Section>
				<Banner bannerIndex={2}/>
			</Section>

			<Section >
				<div className="col-sm-9 col-xs-11" style={{marginTop: 20}}>
					<Title 
						title="Vítima retirou tumor de 3 quilos do abdome"
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11" style={{marginBottom: 45}}>
					<div className="row">
						<div className="col-md-6 col-xs-12">
							<Text
								text='A aposentada M.R.C., de 67 anos, testemunhou de perto o acidente do césio 137, em Goiânia. Morava e ainda mora nas proximidades da Rua 26-A, no Setor Aeroporto e, há dois anos, entrou para a relação das 39 pessoas da região diagnosticadas com câncer nas últimas três décadas. Após hipóteses improváveis, ao ponto de médicos cogitando caroço no útero mesmo ela já tendo extraído o órgão, descobriu-se que o inchaço repentino no abdômen era, na verdade, um tumor maligno de bom comportamento que chegou a ter 3 quilos"'
							/>
						</div>
						<div className="col-md-6 col-xs-12">
							<Text
								text='“Se ele tivesse estourado, tinha me matado. Esperei muito tempo para ir ao médico, não sentia dores. Ele estava dentro de uma capa, parecia um neném de seis meses de gestação”, compara. A aposentada preserva em uma pasta os exames feitos na época, as biópsias e as fotos do tumor que serviram, inclusive, para fundamentar o pedido de pensão na Justiça como vítima do césio 137. A resposta, ao contrário de muitos casos que demoram anos para terem solução, foi rápida. Meses depois, M.R. foi oficialmente reconhecida como vítima.'
							/>
						</div>
					</div>
				</div>
			</Section>
			<Section fullWidth={true}>
				<BgContainer
					color="#000000"
				>
					<div className="row center-xs">
						<div className="col-md-9 col-xs-12">
							<VideoYoutube
								videoID="T4PDxsRaIyI"
								title="Especial Césio: Depoimento Odesson"
							/>
						</div>
					</div>
				</BgContainer>
			</Section>
			<Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="Foram diagnosticados 42 tipos de câncer"
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='O acompanhamento epidemiológico do grupo de pessoas reconhecidas oficialmente como vítimas do césio 137 é feito pelo Centro de Assistência ao Radioacidentado (C.A.R.A.), vinculado à Secretaria da Saúde do Estado de Goiás (SES/GO) - antiga Superintendência Leide das Neves (SuLeide). Até 2015, 42 tipos de câncer foram diagnosticados na população atingida, sendo a maioria entre os pertencentes da categoria 3, a maior parte dos monitorados. Estão neste grupo trabalhadores envolvidos no processo de descontaminação, vizinhos de focos e parentes das vítimas.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Hoje, segundo informações do C.A.R.A., existem ainda nas categorias 1 e 2 16 casos de câncer, mas estudos feitos atestam ainda não ser possível relacioná-los à radiação ionizante. Independentemente disto, a doença já figura entre as principais causas de mortes do público monitorado nesses 30 anos. De um total de 1.232 pessoas pertencentes às três categorias, 91 delas (7,3%), além das quatro que morreram na época do acidente, faleceram desde 1987 de causas variadas. Deste total, seis foram comprovadamente por câncer.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Pesquisas foram deflagradas após o acidente do césio 137, muitas inclusive a partir das atividades do C.A.R.A. A ciência, no entanto, ainda encontra dificuldades para captar dados e traçar a relação entre a doença e determinados níveis de radiação. Isto ocorre principalmente, segundo a coordenadora-geral de Prevenção e Vigilância do Instituto Nacional do Câncer, Ubirani Barros Otero, em possíveis casos decorrentes de baixas doses recebidas. Quanto menor a dose de radiação, e aí entram pessoas da categoria 3, mais difícil fica para traçar o vínculo.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="39 casos na mesma região"
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Novo levantamento feito pela presidente da AVCésio e reportagem do POPULAR na região do césio identificou 39 pessoas com câncer em 30 anos'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11" style={{marginBottom: 45}}>
					<Text
						text='Clique aqui e veja estudo completo.'
						href="https://www.opopular.com.br/editorias/cidade/39-casos-na-mesma-regi%C3%A3o-1.1343679"
						link={true}
					/>
				</div>
			</Section>
			<section style={{marginBottom: 90}}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/presente/lote-isolado.jpg`, overlay: true}}
					hero={true}
				>
				<div className="row center-xs middle-xs" style={{height: 690}}>
					<div className="col-xs-12">
						<div className="row center-xs">
							<div className="col-sm-10 col-xs-12">
								<Title 
									title="Lote nem tão isolado assim"
									type={1}
									color={colors.primary}
								/>
							</div>
							<div className="col-sm-8 col-xs-12">
								<Title
									title="Terreno da Rua 26-A, apesar de concretado e desocupado, já foi utilizado como estacionamento de veículos pesados e professora da Universidade de São Paulo (USP) se espantou com quantidade de capim, em 2013"
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
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Possui histórico controverso o lote da Rua 26-A no Setor Aeroporto, em Goiânia, onde em 1987 ficava o ferro velho de Devair Alves Ferreira, um dos principais focos de contaminação do césio 137. Vizinho das 39 pessoas da região que foram diagnosticadas com câncer nesses 30 anos, ele é um dos dois que ainda estão concretados e desocupados. O outro lote fica na Rua 57, no Centro. O isolamento, segundo moradores próximos, nem sempre foi uma realidade, chegando em determinadas épocas a transparecer certo abandono.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='A situação chamou a atenção, inclusive, da professora sênior do Instituto de Física da Universidade de São Paulo (IF-USP), Emico Okuno, que esteve em Goiânia em 2013 para um congresso e aproveitou para visitar o local. “O cimento estava muito mal feito e tinha capim crescendo”, conta ela, que até enviou uma foto para a reportagem do POPULAR para mostrar como estava. Na imagem, ela aparece colhendo porção do capim que foi levada para o laboratório da universidade, onde fizeram a medição da concentração de césio (veja correlata).'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='É de responsabilidade da Comissão Nacional de Energia Nuclear (Cnen) a averiguação do estado de conservação dos locais contaminados. Além disso, segundo o chefe da Divisão de Rejeitos da Diretoria de Radioproteção e Segurança Nuclear, o físico Walter Mendes Ferreira, que acompanhou todo o processo de descontaminação feito em 1987, cabe à Cnen notificar a prefeitura para que sejam providenciados reparos por parte do proprietário, caso seja necessário. Existe, ainda, o alerta de que qualquer intervenção deve, primeiro, ser comunicada à Comissão.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='O lote da Rua 57, onde ficava a casa de Roberto dos Santos Alves, um dos homens que retirou a peça do aparelho de radioterapia de dentro do prédio abandonado do Instituto Goiano de Radioterapia, é propriedade do Estado. Já o da Rua 26-A manteve-se como propriedade privada, do empresário Lourival Louza Júnior, dono do Shopping Flamboyant. Via assessoria de comunicação, ele informou que nunca houve manutenções no lote e que jamais foi avisado de algum órgão que realiza o serviço no local.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='A presidente da Associação das Vítimas do Césio 137 (AVCésio), Suely Lina  Moraes Silva, que tem uma casa na mesma região, conta que o lote chegou a ser indevidamente utilizado como estacionamento de veículos pesados por moradores do prédio em frente. De características diferenciadas em relação aos demais terrenos, o lote da 26-A possui uma mina d’água e, com o peso dos caminhões, o concreto começou a afundar, ameaçando a integridade do cimento. Para evitar complicações, a Cnen isolou o local construindo uma mureta na entrada.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="RISCOS"
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Essas e outras situações geraram desconforto entre habitantes da região. Emico Okuno prega a preservação do concreto como medida de proteção e para evitar contato das pessoas com o solo, diante da possível existência de traços de radiação. Trinta anos correspondem à chamada meia vida do césio 137, que é quando apenas metade dos átomos emitiu radiação e a outra metade ainda persiste. Walter Ferreira calcula 300 anos para que todo o césio dispersado nos rejeitos coletados deixe de existir (veja quadro).'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Os técnicos da Cnen realizam medições no local de seis em seis meses. Walter Ferreira reconhece que o lote foi o que mais deu trabalho para ser descontaminado em razão do tamanho e das características do lençol freático, mas garante que o que existe de radiação no local é insuficiente para gerar qualquer contaminação. “E que bom que está nascendo capim. Pior seria se não estivesse. Na época, foram feitas escavações até o limite para não encontrar traços de césio mais. O solo da região é argiloso e, por sorte, isso retém o césio, facilitando a retirada”, afirma.'
					/>
				</div>
			</Section>

			<Section>
				<Banner bannerIndex={3}/>
			</Section>

			<Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="Capim tinha concentração maior que o recomendado"
						color={colors.primary}
					/>
				</div>

			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Em 2013 e, portanto, 26 anos após o acidente do césio 137, o capim coletado pela professora sênior do Instituto de Física da Universidade de São Paulo (IF-USP) Emico Okuno no lote da Rua 26-A, no Setor Aeroporto, e levado para análise em São Paulo apresentou uma concentração de césio acima da recomendada. A análise feita no Instituto de Geociências da USP pela técnica especialista Luciana Nogueira obteve o resultado de 108 becquerel (Bq) de césio por grama de capim, que, apesar de alto, seria insuficiente para gerar contaminação imediata.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Como base de cálculo, foi utilizada a referência de 2005, quando a Comissão Nacional de Energia Nuclear (Cnen) estabeleceu, segundo a professora, a máxima de 1Kbequerel/Kg como o recomendado em caso de alimentos. A unidade foi convertida para gramas, já que a quantidade de capim era pouca e chegou-se à recomendação de 1 bequerel/grama, ou seja, mais de 100 vezes a menos do que o que foi identificado. “Não é um risco imediato, mas pode ser em longo prazo, se algum animal ingerir o capim e for acumulando aos poucos no organismo”, explica.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='O resultado da análise foi comunicado por Emico a então presidência da Cnen, alertando inclusive sobre a necessidade de manter o lote limpo. Hoje, a Comissão rebate a medição feita, alegando que é muito improvável o valor apontado, pois está muito acima dos observados na área desde o momento do acidente. “Provavelmente, este valor deve-se a uma interpretação equivocada de unidades. A concentração de atividade radioativa deveria ser em Bq/Kg e não em Bq/g”, afirma a nota enviada à reportagem do POPULAR.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Até pés de melancia se sobrepuseram ao concreto e chegaram a dar frutos no lote da Rua 26-A. Eles, inclusive, sumiram de repente, segundo a presidente da Associação das Vítimas do Césio 137 (AVCésio), Suely Lina Moraes, indicando que alguém possa ter consumido. “Muito morador de rua dorme no lote”, conta. Quando informada sobre e perguntada da possibilidade de que os frutos tenham concentração semelhante a do capim, Emico Okuno, que é autora do livro Física das Radiações, afirma que a regra é a mesma, podendo gerar efeitos em longo prazo.'
					/>
				</div>
			</Section>
			<Section >
				<div className="col-sm-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="Dono pagou R$ 10 mil de ITU este ano"
						color={colors.primary}
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='O empresário Lourival Louza Júnior, dono do Shopping Flamboyant, também é dono do lote da Rua 26-A, no Setor Aeroporto, um dos locais que foram mais contaminados pelo césio 137, em 1987. Neste tempo todo, segundo ele, nenhum órgão público o procurou para dar qualquer destinação ao lote e a propriedade ficou praticamente inútil, sem poder ser oferecida à atividade imobiliária, além de gerar um valor caro de Imposto Territorial Urbano (ITU). Só este ano, o total pago foi de aproximadamente R$ 10 mil.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11">
					<Text
						text='Lourival já era dono do lote onde ficava o ferro velho de Devair Alves Ferreira antes do acidente radiológico. O chefe da Divisão de Rejeitos da Diretoria de Radioproteção e Segurança Nuclear da Comissão Nacional de Energia Nuclear (Cnen), Walter Mendes Ferreira, contrapõe a versão de que nada pode ser feito com a propriedade. “Vender, ele pode, por exemplo. Se ele quiser fazer qualquer coisa, basta solicitar laudo da Cnen. O lote é dele, é privado. O que a gente faz é dar apoio técnico e científico para afirmar que o lote dele não oferece risco”, diz.'
					/>
				</div>
			</Section>
			<Section>
				<div className="col-md-9 col-xs-11"  style={{marginBottom: 45}}>
					<Text
						text='Na Rua 15-A, por exemplo, bem próximo à propriedade de Lourival, o lote onde ficava a casa da família de Edson Fabiano, que chegou a levar um pedaço de césio para dentro de casa, ficou concretado e isolado até pouco tempo. Depois da avaliação e acompanhamento dos técnicos da Cnen, foi dada uma destinação ao terreno e um prédio residencial está sendo concluído no local. “A gente só pede que, para toda construção, deve-se ter acompanhamento nosso até para tirar uma possível radiofobia, aquela interrogação mental se o local está livre ou não de contaminação”, tranquiliza Walter.'
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
								videoID="TXiZ4lggvCo"
								title="Especial Césio: Depoimento Odesson"
							/>
						</div>
					</div>
				</BgContainer>
			</Section>
			 <section  className="row center-xs">
				<div className="col-md-9 col-xs-11"  style={{marginTop: 45}}>
					<Title 
						title="Galeria"
						color={colors.primary}
					/>
					<Gallery images={galleryContent}/>
				</div>
			</section>  
			<Section>
				<div className="col-xs-12">
					<Expediente exped={exped} />
				</div>
			</Section>
			<section>
				<Link to="/amanha">
					<BgContainer 
						color="#cccccc"
						img={{url: `${process.env.PUBLIC_URL}/img/capa/capa_futuro.jpg`, overlay: true}}
						hero={true}
						bgMobilePosition='62%'
					>
					<div className="row center-xs middle-xs" style={{height: 690}}>
						<div className="col-xs-12">
							<div className="row center-xs">
								<div className="col-sm-10 col-xs-12">
									<Title 
										beforeTitle="LEIA TAMBÉM:"
										title="AMANHÃ"
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

export default Present;