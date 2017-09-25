import React from 'react';
// Separate local imports from dependencies
import Arrow 				from '../../components/home-arrow/Arrow.jsx';
import Section 				from '../../components/section/Section.jsx';
import BgContainer 		from '../../components/bg-container/BgContainer.jsx';
import Cover 					from '../../components/cover-page/Cover.jsx';
import Image 					from '../../components/image/Image.jsx';
import TimeDivision 	from '../../components/time-division/TimeDivision.jsx';


const capaPage = {
		img: `${process.env.PUBLIC_URL}/img/capa/man.png`,
		titleImg: `${process.env.PUBLIC_URL}/img/capa/marca-cesio.png`,
		pastImg: `${process.env.PUBLIC_URL}/img/capa/capa_passado.jpg`,
		presentImg: `${process.env.PUBLIC_URL}/img/capa/capa_presente.jpg`,
		futureImg: `${process.env.PUBLIC_URL}/img/capa/capa_futuro.jpg`,
		text: 'O projeto multiplataforma tem a intenção de resgatar as memórias do maior acidente radiológico do planeta, mostrar os efeitos da tragédia três décadas depois do ocorrido e as lições que ficaram para evitar novos desastres. Recorde, conheça e compartilhe.',
	};

function Home() {
    return (
			<div className="container-fluid">

			 <Section fullWidth={true}>
				<BgContainer 
					color="#cccccc"
					img={{url: `${process.env.PUBLIC_URL}/img/concrete-pattern.png`, repeat: true}}
				>
					<div className="row center-xs">
						<div className="col-md-10 col-sm-9 col-xs-12">

								<div className="row conter-xs middle-xs">

									<div className="col-md-6 col-xs-12">
										<Image
											src={capaPage.img}
											margin='0'
										/>
									</div>
									<div className="col-md-6 col-xs-12">
										<Cover 
											img={capaPage.img}
											titleImg={capaPage.titleImg}
											text={capaPage.text}
										/>
									</div>
									<Arrow />
								</div>
								
						</div>
					</div>
				</BgContainer>
			</Section> 

			<Section fullWidth={true}>
				<div className="row center-xs">
					<div className="col-xs-12">
						<TimeDivision
							pastImg={capaPage.pastImg}
							presentImg={capaPage.presentImg}
							futureImg={capaPage.futureImg}
						/>
					</div>
				</div>
			</Section>
					
			</div>
  )
}

export default Home