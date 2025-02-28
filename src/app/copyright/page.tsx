"use client"

import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";

const Copyright = () => {

    return(
        <Container>
            <Intro/>
            <section>
                <h2 className="mb-8 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                    Copyright
                </h2>               
                <h3 className="text-2xl">Todos los derechos reservados</h3>
                <p><strong>Queda totalmente prohibida la reproducción total o parcial de todos nuestros contenidos</strong> publicados tanto en esta página web como en cualquiera de nuestros perfiles de redes sociales.</p>
                <p className="mb-8">Nos reservamos el derecho de <strong>tomar las medidas legales que sean necesarias</strong> para salvaguardar nuestro trabajo y evitar que terceras personas hagan uso fraudulento de nuestro contenido.</p>
                
                <h3 className="text-2xl">Medidas legales</h3>
                <p className="mb-8">La reproducción ilícita de nuestros contenidos acarreará, por nuestra parte, la puesta en marcha de <strong>todos los mecanismos legales necesarios para evitar que se sigan produciendo tales delitos.</strong> No dudaremos, si lo consideramos oportuno, en tomar las <strong>medidas judiciales que procedan para denunciar cualquier publicación que infrinja o vulnere nuestros Derechos de Propiedad Intelectual o Derechos de Autor.</strong></p>
                
                <h3 className="text-2xl">Ley de Propiedad Intelectual</h3>
                <p>De acuerdo con lo establecido en el texto refundido de la <strong>Ley de Propiedad Intelectual</strong>, aprobado por <strong>Real Decreto Legislativo 1/1996</strong>, con fecha 12 de abril, <strong>la propiedad intelectual de una obra literaria, artística o científica corresponde al autor por el solo hecho de su creación.</strong></p>
                <p className="mb-8"><strong>La propiedad intelectual de una obra corresponde al autor por el solo hecho de su creación.</strong></p>
                
                <h3 className="text-2xl">Mencionar no implica derechos de uso</h3>
                <p><strong>No está permitido publicar ninguno de nuestros contenidos</strong> salvo permiso explícito por escrito por nuestra parte.</p>
                <p className="mb-8">El hecho de mencionarnos, ya sea a través de redes sociales o en cualquier texto, no otorga el derecho a utilizar nuestros contenidos sin consentimiento. Igualmente, esta práctica infringe la Ley de Propiedad Intelectual y, de nuevo, actuaremos en consecuencia.</p>
                
                <p><strong>Plantas, Suculentas y Más</strong></p>
            </section>
        </Container>
    )
}

export default Copyright;