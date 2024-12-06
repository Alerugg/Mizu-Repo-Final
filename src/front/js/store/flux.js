const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            services: [],
            servicesIndividuales: [],
            servicesDuos: [],
        },
        actions: {
            fetchServices: async () => {
                try {
                    const myHeaders = new Headers();
                    myHeaders.append("Cookie", ".Tunnels.Relay.WebForwarding.Cookies=CfDJ8E0FHi1JCVNKrny-ARCYWxMLcCMbEyUZvZ0yTZ1BwgW8LGagYVuBWtKKjdKYrlgtCTSiC-rD_N5VAC0yQGB11igH6XcTC-TiatHAWJgS-eSW4cVORaAb-gs2DNfaiwZdOcrno2-KVEb_gcnPJbH06OLE3sQ8AJhU-fMB7kNZIlOX2BCHrAFziFpAW-sSnkBfzq5HFw2jF4GMPHwOHnpS1gjsqmMj9oXDBlELuzSbTpO03G0OLBLMV2Q_v1bPg2DO6EF50DXzHABCDxxGwJDKoXX82XwtBVL84StnbfK4PGy-I3e--y5X8h4NfCN75BHvzHa6lfm-6OQamF2ZT7u5v7l87CrwB63WjUYuFl_Hax9_ckTCLmcOW5qwOSQ33VwhsC7XNlq74-eqPPIUXO6ar0_BcYOxnwQsJie-I1CeUIpWano7cDhHUXnniwhcwvzsfrZh8QDI_jF8S37gn0N9EEymvqJiIj18NekiSHsSj9ZeWDBPqDATpDNAbEjNNpWrEC8SarBRaEXuB8qcqtz2bXJg6qgWz34E03PhJy1thDpp93srYWFsv1361pNS5O-jeU6hIDey6t86cD7M10uxScVp7uUwf6uJ3bdWcl70e4aR45VrKnPzT81HyLkj_TjC97T76g7mbJfqM4l_fSsW0Hwas8rZodIavBCsdKGAIR0yvrIc26vJeC6azX1ucsiFmur5CLkyMogV3uOdsYyPa5Un_F0DdjoI5-zaEfyncDWsVevLbCu_XKTKVPeN3RMNWfdQyzrlDXtKiaVj95cVdUVBYmToqeuxjcIchFgvuFBODAh5M2XsVEkn9hFIb7MRCldheZqdw5gmm7lGpHerR6OgZc1xktGLbmdzPXAnqQcF-Yr9AdGlLD-_Ujl_Gc185pPtAPMYzxG_97N44aGKlcR7ZAtHNyC7CKzl2PKVLybSiw3i5TxH3hgJlwTm_kOnvb4Tkk0U4_GD8l5EXDiLqXHUBXRyUiibRO6BmDKaZ5ae");

                    const requestOptions = {
                        method: "GET",
                        headers: myHeaders,
                        redirect: "follow",
                        mode: "cors",
                    };

                    const response = await fetch("https://jubilant-engine-7g4q7g9w7vrfw66r-3001.app.github.dev/api/services", requestOptions);
                    if (!response.ok) {
                        throw new Error("Error al obtener los servicios");
                    }

                    const result = await response.json();

                    const servicesIndividuales = result.filter(service => service.service_type === 'individual');
                    const servicesDuos = result.filter(service => service.service_type === 'duo');

                    setStore({
                        services: result,
                        servicesIndividuales: servicesIndividuales,
                        servicesDuos: servicesDuos,
                    });
                    console.log("Servicios Individuales:", servicesIndividuales);

                } catch (error) {
                    console.error('Error fetching services:', error);
                }
            },
        }
    };
};

export default getState;
