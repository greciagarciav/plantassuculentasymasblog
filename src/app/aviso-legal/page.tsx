"use client"

import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

const AvisoLegal = () => {

    return(
        <Container>
            <Intro/>
            <section>
                <h2 className="mb-8 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Aviso Legal
                </h2>
                <h3 className="text-2xl">Finalidad</h3>
                <p className="mb-8">                    
	                La finalidad del Sitio Web es: Página web con información y consejos sobre plantas.	
                </p>
                <h3 className="text-2xl">Condiciones de Uso</h3>
                <p className="mb-8">La utilización del Sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de uso incluidas en las páginas:</p>
                
                <h3 className="text-2xl">Aviso Legal</h3>                
                <p>Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar el Sitio Web.</p>
                <p>El acceso al Sitio Web no supone, en modo alguno, el inicio de una relación comercial con el Titular.</p>
                <p className="mb-8">A través del Sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular y/o sus colaboradores han publicado por medio de Internet.</p>
                
                <h3 className="text-2xl">Medidas de seguridad</h3>
                <p className="mb-8">Los datos personales que facilite al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en exclusiva al Titular, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.</p>
                
                <h3 className="text-2xl">Contenidos</h3>
                <p className="mb-8">El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el Sitio Web de fuentes que considera fiables. Sin embargo, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no garantiza que sea exacta, completa o actualizada.</p>
                
                <h3 className="text-2xl">Política de cookies</h3>
                <p className="mb-8">El Titular obtiene y conserva la siguiente información acerca de los visitantes del Sitio Web:</p>
                <ul className="mb-8">
                    <li>El nombre de dominio del proveedor (PSI) y/o dirección IP que les da acceso a la red.</li>
                    <li>La fecha y hora de acceso al sitio Web.</li>
                    <li>La dirección de Internet origen del enlace que dirige al sitio Web.</li>
                    <li>El número de visitantes diarios de cada sección.</li>
                </ul>
                
                <h3 className="text-2xl">Enlaces a otros sitios Web</h3>
                <p className="mb-8">El Titular puede proporcionarle acceso a sitios Web de terceros mediante enlaces con la finalidad exclusiva de informar sobre la existencia de otras fuentes de información en Internet en las que podrá ampliar los datos ofrecidos en el Sitio Web.</p>
                
                <h3 className="text-2xl">Propiedad intelectual e industrial</h3>
                <p className="mb-8">Todos los derechos están reservados. Todo acceso a este Sitio Web está sujeto a las siguientes condiciones: la reproducción, almacenaje permanente y la difusión de los contenidos o cualquier otro uso que tenga finalidad pública o comercial queda expresamente prohibida sin el consentimiento previo expreso y por escrito del Titular.</p>
                
                <h3 className="text-2xl">Limitación de responsabilidad</h3>
                <p className="mb-8">La información y servicios incluidos o disponibles a través del Sitio Web pueden incluir incorrecciones o errores tipográficos. De forma periódica el Titular incorpora mejoras y/o cambios a la información contenida y/o los Servicios que puede introducir en cualquier momento.</p>

            </section>
        </Container>
    )
}

export default AvisoLegal;