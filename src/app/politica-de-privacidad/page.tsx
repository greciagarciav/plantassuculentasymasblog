"use client"

import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

const PolitcaDePrivacidad = () => {

    return(
        <Container>
            <Intro/>
            <section>
                <h2 className="mb-8 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Politica de Privacidad
                </h2>               
                <p className="mb-8">El Titular le informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados durante la navegación a través del Sitio Web.</p>
                
                <h3 className="text-2xl">Identidad del Responsable</h3>
                <ul className="mb-8">
                    <li><strong>Responsable:</strong> Plantas, Suculentas y Más.</li>
                    <li><strong>Domicilio:</strong> Lima - Perú.</li>
                    <li><strong>Correo electrónico:</strong> contacto@plantassuculentasymas.com</li>
                    <li><strong>Sitio Web:</strong> https://www.plantassuculentasymas.com</li>
                </ul>
                
                <h3 className="text-2xl">Principios aplicados en el tratamiento de datos</h3>
                <p>El Titular aplicará los siguientes principios en el tratamiento de los datos personales:</p>
                <ul className="mb-8">
                    <li><strong>Licitud, lealtad y transparencia:</strong> Se requerirá consentimiento para el tratamiento de los datos personales con absoluta transparencia.</li>
                    <li><strong>Minimización de datos:</strong> Solo se solicitarán los datos estrictamente necesarios.</li>
                    <li><strong>Limitación del plazo de conservación:</strong> Los datos se almacenarán solo el tiempo necesario para el tratamiento.</li>
                    <li><strong>Integridad y confidencialidad:</strong> Los datos serán tratados con medidas de seguridad para garantizar su confidencialidad.</li>
                </ul>
                
                <h3 className="text-2xl">Obtención de datos personales</h3>
                <p className="mb-8">No es necesario proporcionar datos personales para navegar por el Sitio Web.</p>
                
                <h3 className="text-2xl">Derechos</h3>
                <p>El usuario tiene derecho a:</p>
                <ul>
                    <li>Solicitar el acceso a sus datos almacenados.</li>
                    <li>Solicitar una rectificación o supresión.</li>
                    <li>Solicitar la limitación del tratamiento.</li>
                    <li>Oponerse al tratamiento.</li>
                    <li>Solicitar la portabilidad de sus datos.</li>
                </ul>
                <p className="mb-8">Para ejercer estos derechos, el usuario deberá enviar una solicitud junto con una copia de su documento de identidad al correo electrónico: <strong>contacto@plantassuculentasymas.com</strong>.</p>
                
                <h3 className="text-2xl">Finalidad del tratamiento de datos personales</h3>
                <p>Los datos personales serán tratados para:</p>
                <ul className="mb-8">
                    <li>Garantizar el cumplimiento de la normativa vigente.</li>
                    <li>Apoyar y mejorar los servicios del Sitio Web.</li>
                    <li>Gestionar las redes sociales en las que el Titular tiene presencia.</li>
                </ul>
                
                <h3 className="text-2xl">Seguridad de los datos personales</h3>
                <p className="mb-8">El Titular implementa medidas de seguridad adecuadas para evitar pérdidas, accesos no autorizados o alteraciones en los datos.</p>
                
                <h3 className="text-2xl">Contenido de otros sitios web</h3>
                <p className="mb-8">El Sitio Web puede incluir contenido incrustado de otros sitios (por ejemplo, videos o imágenes), que pueden recopilar datos sobre el usuario.</p>
                
                <h3 className="text-2xl">Política de Cookies</h3>
                <p className="mb-8">El Sitio Web utiliza cookies para su correcto funcionamiento.</p>
                
                <h3 className="text-2xl">Legitimación para el tratamiento de datos</h3>
                <p className="mb-8">La base legal para el tratamiento de los datos personales es el consentimiento del usuario.</p>
                
                <h3 className="text-2xl">Categorías de datos personales</h3>
                <p className="mb-8">Se recopilan datos identificativos. No se recopilan categorías de datos especialmente protegidos.</p>
                
                <h3 className="text-2xl">Conservación de datos personales</h3>
                <p className="mb-8">Los datos personales se conservarán hasta que el usuario solicite su supresión.</p>
                
                <h3 className="text-2xl">Destinatarios de datos personales</h3>
                <ul className="mb-8">
                    <li><strong>Mailrelay:</strong> Servicio de email marketing.</li>
                    <li><strong>Google Analytics:</strong> Servicio de análisis web.</li>
                    <li><strong>Google AdSense:</strong> Servicio de publicidad.</li>
                </ul>
                
                <h3 className="text-2xl">Navegación Web</h3>
                <p className="mb-8">El Sitio Web puede recopilar datos no identificativos, como dirección IP y hábitos de navegación.</p>
                
                <h3 className="text-2xl">Exactitud y veracidad de los datos personales</h3>
                <p className="mb-8">El usuario es responsable de la veracidad y actualización de sus datos personales.</p>
                
                <h3 className="text-2xl">Aceptación y consentimiento</h3>
                <p className="mb-8">El usuario declara haber sido informado y acepta esta Política de Privacidad.</p>
                
                <h3 className="text-2xl">Cambios en la Política de Privacidad</h3>
                <p className="mb-8">El Titular se reserva el derecho de modificar esta política para adaptarla a cambios legislativos o jurisprudenciales.</p>
            </section>
        </Container>
    )
}

export default PolitcaDePrivacidad;