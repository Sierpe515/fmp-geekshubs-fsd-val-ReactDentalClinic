import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AboutUs.css'
import Local from '../../image/local.jpg'
import Logo2 from '../../image/logo2.png'
import Location from '../../image/location.png'

export const AboutUs = () => {
  return (
    <Container fluid className="homeContainerMin d-flex flex-column justify-content-between">
            <Row className="d-flex justify-content-center">
                <Col xxl={4} xl={5} sm={7} className="my-3">
                    <div className='logRegContainer'>
                        <h1 className='text-center'>About Us</h1>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-around'>
                <Col xxl={4} xl={4} sm={10}>
                    <div className='column1 d-flex justify-content-center flex-column align-items-center'>
                        <img className='localImg' src={Local} alt="" />
                        <p>Hello World!</p>
                        <p>Somos Planet Express Dental Clinic, una pequeña clínica dental ficticia que pretende
                            replicar la aplicación web de una consulta, capaz de gestionar el modelo de negocio 
                            de una clínica.</p>
                        <p>Todo ello como un proyecto de aprendizaje de React y Redux. Se trata del quinto proyecto
                            del Bootcamp de GeeksHubs Academy, en el que se nos requiere generar una parte frontal 
                            que conecte con nuestra API, encargada de gestionar el negocio.</p>
                        <p>Por lo tanto, en esta web se han generado las vistas necesarias para poder registrarnos 
                            y logearnos como usuarios, acceder a una zona exclusiva para administradores y otra para 
                            doctores. También una vista para ver el perfil individual del usuario, modificar los datos
                            de usuario y ver las citas pasadas y pendientes.</p>
                    </div>
                </Col>
                <Col xxl={4} xl={4} sm={10}>
                    <div className='column2 d-flex justify-content-center flex-column align-items-center'>
                        <p>A su vez, los dentistas acceden como profesionales, lo que les permite ver las citas 
                            programadas y su detalle, así como un listado de los usuarios registrados y su detalle 
                            con los datos personales.</p>
                        <img className='logo2' src={Logo2} alt="" />
                        <p>Nuestra clínica está ambientada principalmente en la mítica serie Futurama, con el doctor
                            Zoiberg como principal inspiración. El resto de doctores mostrados en la aplicación son 
                            conocidos doctores de la cultura pop. Aún así, la aplicación permite la creación dinámica
                            de más doctores.
                        </p>
                        <p>También ofrecemos una amplia gama de servicios de salud dental que se pueden seleccionar 
                            en el momento de solicitar una cita y que se pueden consultar -del mismo modo que los doctores-
                            en el desplegable de servicios.
                        </p>
                        <p>Contamos en lo último en seguridad para que tanto sus datos personales como sus contraseñas
                            estén seguras.
                        </p>
                        <p>El cliente registrado puede acceder a su perfil y actualizar sus datos. También puede consultar
                            su historial y sus citas pendientes, así como cancelarlas.  
                        </p>
                        <p>Y si el cliente lo prefiere, también puede solicitar a un administrador que lo haga por él. Hemos
                            tratado de dar la mayor funcionalidad a nuestra web para que funcione en todos los aspectos como 
                            lo haría un negocio real, salvando las diferencias, ya que este proyecto ha sido desarrollado por 
                            una única <a href="https://www.linkedin.com/in/fernando-martínez-pardo-61456712a/">persona</a> en algo menos de tres semanas.
                        </p>
                    </div>
                </Col>
                <Col xxl={4} xl={4} sm={10}>
                    <div className='column3 d-flex justify-content-center flex-column align-items-center text-center'>
                        <h4>Spot Comercial</h4>
                        <p></p>
                        <p><strong>Por favor, pruebe a registrarse con nosotros y formar parte de nuestra clínica.</strong></p>
                        <p><strong>Solicite una cita con uno de nuestros famosos doctores y deje que cuidemos de su salud dental.</strong></p>
                        <p>Tal vez no sean los más indicados, pero a buen seguro curarán su dolencia, <br/>
                            aunque para ello tengan que causarle otras nuevas.</p>
                        <p><strong>Nuestra clínica dispone de lo último en equipamiento y protocolos de seguridad</strong></p>
                        <p><strong>Nos encontramos en algún lugar de la ciudad de Nueva York del año 2999</strong></p>
                        <img className='locationImg' src={Location} alt="" />
                        <h4><strong>No se lo piense más y PIDA CITA YA!</strong></h4>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}