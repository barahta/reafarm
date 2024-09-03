import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const darkThemeStyle = {
    "version": "1.0",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [61.247479, 73.506687]
            },
            "properties": {
                "iconColor": "#ff0000"
            }
        }
    ],
    "elements": [
        {
            "type": "geometry",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [61.247479, 73.506687],
                                [61.247479, 73.506687]
                            ]
                        ]
                    },
                    "properties": {
                        "stroke": "#ffffff",
                        "fill": "#000000"
                    }
                }
            ]
        }
    ]
};

const MyMap = () => {
    const coordinates = [61.247479,73.506687]; // Пример: Москва, Красная площадь

    return (
        <YMaps>
            <Map
                defaultState={{
                    center: coordinates,
                    zoom: 10,
                    controls: [] // Убираем стандартные элементы управления для кастомизации
                }}
                width="100%"  // Укажите ширину карты
                height="400px" // Укажите высоту карты
                options={{
                    // Добавляем стили карты
                    styles: darkThemeStyle
                }}
            >
                <Placemark geometry={coordinates} />
            </Map>
        </YMaps>
    );
};

export default MyMap;