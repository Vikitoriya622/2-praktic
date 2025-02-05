var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });
var format_1lab_1_2 = new ol.format.GeoJSON();
var features_1lab_1_2 = format_1lab_1_2.readFeatures(json_1lab_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab_1_2.addFeatures(features_1lab_1_2);
var lyr_1lab_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1lab_1_2, 
                style: style_1lab_1_2,
                popuplayertitle: 'Практическая 1 — lab_1',
                interactive: true,
                title: '<img src="styles/legend/1lab_1_2.png" /> Практическая 1 — lab_1'
            });
var format_1lab1_3 = new ol.format.GeoJSON();
var features_1lab1_3 = format_1lab1_3.readFeatures(json_1lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1lab1_3.addFeatures(features_1lab1_3);
var lyr_1lab1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1lab1_3, 
                style: style_1lab1_3,
                popuplayertitle: 'Практическая 1 — lab 1',
                interactive: true,
                title: '<img src="styles/legend/1lab1_3.png" /> Практическая 1 — lab 1'
            });
var format_12building_4 = new ol.format.GeoJSON();
var features_12building_4 = format_12building_4.readFeatures(json_12building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12building_4.addFeatures(features_12building_4);
var lyr_12building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12building_4, 
                style: style_12building_4,
                popuplayertitle: 'Практическая 1(2) — building',
                interactive: true,
                title: '<img src="styles/legend/12building_4.png" /> Практическая 1(2) — building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'дороги — highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> дороги — highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_1lab_1_2.setVisible(true);lyr_1lab1_3.setVisible(true);lyr_12building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_1lab_1_2,lyr_1lab1_3,lyr_12building_4,lyr_highway_5,lyr_highway_6];
lyr_1lab_1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_1lab1_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_12building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'adress': 'adress', 'адрес': 'адрес', 'адрем': 'адрем', });
lyr_highway_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'ref': 'ref', 'lanes': 'lanes', });
lyr_1lab_1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_1lab1_3.set('fieldImages', {'fid': '', 'name': '', });
lyr_12building_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:housenumber': '', 'adress': '', 'адрес': '', 'адрем': '', });
lyr_highway_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_highway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'ref': '', 'lanes': '', });
lyr_1lab_1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_1lab1_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_12building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'adress': 'no label', 'адрес': 'no label', 'адрем': 'no label', });
lyr_highway_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'ref': 'no label', 'lanes': 'no label', });
lyr_highway_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});