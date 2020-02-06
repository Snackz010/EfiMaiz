import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	StatusBar,
} from 'react-native'

const Publicidad = (props) => {
	return(
		<>
			<StatusBar barStyle="light-content" backgroundColor='rgb(70, 160, 90)'/>
			<ScrollView>
				<View>
					<View style={styles.header}>
						<Image style={styles.headerImage} source={{uri:'https://infoagro.com.ar/wp-content/uploads/2019/08/Demanda-de-agroquimicos-y-fertilizantes-2-1.jpg'}}/>
						<View style={{...styles.cardContent, ...styles.opacity}}>
							<View>
								<Text style={styles.title}>Agroquímicos</Text>
								<Text style={styles.subTitle}>Agroquímicos sugeridos para el control de plaga del maíz</Text>
							</View>
						</View>
					</View>
					<View style={styles.body}>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://fertitienda.com/812-2771-large/deltametrina-insecticida-acaricida.jpg'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Deltametrin</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://fertitienda.com/1143-3963-large/lambda-cihalotrin-15gr.jpg'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Lambda Cihalotrina</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://africafreak.com/wp-content/uploads/2009/11/furadan.jpg?ezimgfmt=ng:webp/ngcb1'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Furadan Carbofuran</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://www.distribuidoraoslo.cl/wp-content/uploads/2015/06/CARBARILO.jpg'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Carbarilo</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://www.gmtchile.cl/gmtagro/wp-content/uploads/2019/05/Clorpirifos_480EC_1L_5L_10L_400x313pix_2019.jpg'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Clorpirifos</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://http2.mlstatic.com/deltametrina-25-insecticida-D_NQ_NP_190811-MLA20636775658_032016-F.webp'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Deltametrina</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://http2.mlstatic.com/cipermetrina-sp-y-cipermin-piretroide-cucarachas-D_NQ_NP_996143-MLA29091460361_012019-F.webp'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Cipermetrina</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://http2.mlstatic.com/metamidofos-insecticida-tamaron-D_NQ_NP_949145-MLM29492262711_022019-F.webp'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Metamidofos</Text></Text>
						</View>
						<View>
							<Image style={styles.cardImage} source={{uri:'https://static.wixstatic.com/media/4ffbc7_dceb1d6e83f943c9ab87cc3b1f53b982.jpg/v1/fill/w_172,h_257,al_c,q_90,usm_0.66_1.00_0.01/4ffbc7_dceb1d6e83f943c9ab87cc3b1f53b982.webp'}}/>
							<Text style={styles.textDescription}><Text style={styles.title3}>Paration Metilico</Text></Text>
						</View>
					</View>
				</View>
			</ScrollView>
    </>
	);
}


const styles = StyleSheet.create({
	header:{
		backgroundColor: "white",
		height:150,
	},
	headerImage:{
		height:150,
		flex: 1,
		width: null,
	},
	body:{
		marginTop:10,
	},
	cardContent: {
		display: 'flex',
		alignItems: 'center',
		position: 'absolute',
		zIndex: 1,
		left: 0,
		right: 0,
		backgroundColor: 'transparent',
	},
	title:{
		fontSize:24,
		color: "#ffffff",
		marginTop: 10,
		fontWeight:'bold',
		textAlign: 'center',
	},
	subTitle:{
		textAlign: 'center',
		fontSize:14,
		color: "#ffffff",
		marginTop: 5
	},
	title2:{
		fontSize:14,
		fontWeight:'bold',
		marginTop: 10,
		textAlign: 'justify',
	},
	title3:{
		fontSize:14,
		fontWeight:'bold',
		marginTop: 10,
		textAlign: 'justify',
		color: 'darkgreen'
	},
	textDescription:{
		textAlign: 'justify',
		fontSize:14,
	},
	textItem:{
		textAlign: 'justify',
		fontSize:14,
		marginTop: 20
	},
	opacity:{
		flex: 1,
		zIndex: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
		height: 150,
	},
	body:{
		margin:10,
		backgroundColor: 'rgba(0,0,0,.05)',
		borderRadius: 10,
		padding: 15,
	},
	container: {
		flex: 1,
		marginTop: 20,
		marginBottom:15,
		backgroundColor: '#fff'
	},
	head: {
		height: 40,
		backgroundColor: '#f1f8ff'
	},
	text: { 
		margin: 6,
		fontSize: 12
	},
	cardImage:{
		height:150,
		flex: 1,
		width: null,
		borderRadius: 10,
		marginTop: 20,
	},
});

export default Publicidad;