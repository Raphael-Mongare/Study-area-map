var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SamburuCounty_1 = new ol.format.GeoJSON();
var features_SamburuCounty_1 = format_SamburuCounty_1.readFeatures(json_SamburuCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SamburuCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamburuCounty_1.addFeatures(features_SamburuCounty_1);
var lyr_SamburuCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamburuCounty_1, 
                style: style_SamburuCounty_1,
                popuplayertitle: 'Samburu County',
                interactive: true,
                title: '<img src="styles/legend/SamburuCounty_1.png" /> Samburu County'
            });
var format_MeruCounty_2 = new ol.format.GeoJSON();
var features_MeruCounty_2 = format_MeruCounty_2.readFeatures(json_MeruCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeruCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeruCounty_2.addFeatures(features_MeruCounty_2);
var lyr_MeruCounty_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeruCounty_2, 
                style: style_MeruCounty_2,
                popuplayertitle: 'Meru County',
                interactive: true,
                title: '<img src="styles/legend/MeruCounty_2.png" /> Meru County'
            });
var format_MarsabitCounty_3 = new ol.format.GeoJSON();
var features_MarsabitCounty_3 = format_MarsabitCounty_3.readFeatures(json_MarsabitCounty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarsabitCounty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarsabitCounty_3.addFeatures(features_MarsabitCounty_3);
var lyr_MarsabitCounty_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarsabitCounty_3, 
                style: style_MarsabitCounty_3,
                popuplayertitle: 'Marsabit County',
                interactive: true,
                title: '<img src="styles/legend/MarsabitCounty_3.png" /> Marsabit County'
            });
var format_LaikipiaCounty_4 = new ol.format.GeoJSON();
var features_LaikipiaCounty_4 = format_LaikipiaCounty_4.readFeatures(json_LaikipiaCounty_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaikipiaCounty_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaikipiaCounty_4.addFeatures(features_LaikipiaCounty_4);
var lyr_LaikipiaCounty_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaikipiaCounty_4, 
                style: style_LaikipiaCounty_4,
                popuplayertitle: 'Laikipia County',
                interactive: true,
                title: '<img src="styles/legend/LaikipiaCounty_4.png" /> Laikipia County'
            });
var format_KwaleCounty_5 = new ol.format.GeoJSON();
var features_KwaleCounty_5 = format_KwaleCounty_5.readFeatures(json_KwaleCounty_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KwaleCounty_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KwaleCounty_5.addFeatures(features_KwaleCounty_5);
var lyr_KwaleCounty_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KwaleCounty_5, 
                style: style_KwaleCounty_5,
                popuplayertitle: 'Kwale County',
                interactive: true,
                title: '<img src="styles/legend/KwaleCounty_5.png" /> Kwale County'
            });
var format_KiambuCounty_6 = new ol.format.GeoJSON();
var features_KiambuCounty_6 = format_KiambuCounty_6.readFeatures(json_KiambuCounty_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KiambuCounty_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KiambuCounty_6.addFeatures(features_KiambuCounty_6);
var lyr_KiambuCounty_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KiambuCounty_6, 
                style: style_KiambuCounty_6,
                popuplayertitle: 'Kiambu County',
                interactive: true,
                title: '<img src="styles/legend/KiambuCounty_6.png" /> Kiambu County'
            });
var format_KajiadoCounty_7 = new ol.format.GeoJSON();
var features_KajiadoCounty_7 = format_KajiadoCounty_7.readFeatures(json_KajiadoCounty_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KajiadoCounty_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KajiadoCounty_7.addFeatures(features_KajiadoCounty_7);
var lyr_KajiadoCounty_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KajiadoCounty_7, 
                style: style_KajiadoCounty_7,
                popuplayertitle: 'Kajiado County',
                interactive: true,
                title: '<img src="styles/legend/KajiadoCounty_7.png" /> Kajiado County'
            });
var format_IsioloCounty_8 = new ol.format.GeoJSON();
var features_IsioloCounty_8 = format_IsioloCounty_8.readFeatures(json_IsioloCounty_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IsioloCounty_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsioloCounty_8.addFeatures(features_IsioloCounty_8);
var lyr_IsioloCounty_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IsioloCounty_8, 
                style: style_IsioloCounty_8,
                popuplayertitle: 'Isiolo County',
                interactive: true,
                title: '<img src="styles/legend/IsioloCounty_8.png" /> Isiolo County'
            });
var format_HomabayCounty_9 = new ol.format.GeoJSON();
var features_HomabayCounty_9 = format_HomabayCounty_9.readFeatures(json_HomabayCounty_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HomabayCounty_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HomabayCounty_9.addFeatures(features_HomabayCounty_9);
var lyr_HomabayCounty_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HomabayCounty_9, 
                style: style_HomabayCounty_9,
                popuplayertitle: 'Homabay County',
                interactive: true,
                title: '<img src="styles/legend/HomabayCounty_9.png" /> Homabay County'
            });
var format_Studylocation_10 = new ol.format.GeoJSON();
var features_Studylocation_10 = format_Studylocation_10.readFeatures(json_Studylocation_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Studylocation_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Studylocation_10.addFeatures(features_Studylocation_10);
var lyr_Studylocation_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Studylocation_10, 
                style: style_Studylocation_10,
                popuplayertitle: 'Study location',
                interactive: true,
                title: '<img src="styles/legend/Studylocation_10.png" /> Study location'
            });
var format_Countyboundary_11 = new ol.format.GeoJSON();
var features_Countyboundary_11 = format_Countyboundary_11.readFeatures(json_Countyboundary_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countyboundary_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countyboundary_11.addFeatures(features_Countyboundary_11);
var lyr_Countyboundary_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countyboundary_11, 
                style: style_Countyboundary_11,
                popuplayertitle: 'County boundary',
                interactive: true,
                title: '<img src="styles/legend/Countyboundary_11.png" /> County boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SamburuCounty_1.setVisible(true);lyr_MeruCounty_2.setVisible(true);lyr_MarsabitCounty_3.setVisible(true);lyr_LaikipiaCounty_4.setVisible(true);lyr_KwaleCounty_5.setVisible(true);lyr_KiambuCounty_6.setVisible(true);lyr_KajiadoCounty_7.setVisible(true);lyr_IsioloCounty_8.setVisible(true);lyr_HomabayCounty_9.setVisible(true);lyr_Studylocation_10.setVisible(true);lyr_Countyboundary_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SamburuCounty_1,lyr_MeruCounty_2,lyr_MarsabitCounty_3,lyr_LaikipiaCounty_4,lyr_KwaleCounty_5,lyr_KiambuCounty_6,lyr_KajiadoCounty_7,lyr_IsioloCounty_8,lyr_HomabayCounty_9,lyr_Studylocation_10,lyr_Countyboundary_11];
lyr_SamburuCounty_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MeruCounty_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MarsabitCounty_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LaikipiaCounty_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KwaleCounty_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KiambuCounty_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KajiadoCounty_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IsioloCounty_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HomabayCounty_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COUNTY3_': 'COUNTY3_', 'COUNTY3_ID': 'COUNTY3_ID', 'COUNTY': 'COUNTY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Studylocation_10.set('fieldAliases', {'NAME': 'Name:', 'LAYER': 'LAYER', 'ATTR_1': 'ATTR_1', });
lyr_Countyboundary_11.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'COUNTY_NAM': 'County name:', 'COUNTY_COD': 'COUNTY_COD', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SamburuCounty_1.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_MeruCounty_2.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_MarsabitCounty_3.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_LaikipiaCounty_4.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_KwaleCounty_5.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_KiambuCounty_6.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_KajiadoCounty_7.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_IsioloCounty_8.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_HomabayCounty_9.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'COUNTY3_': 'Hidden', 'COUNTY3_ID': 'Hidden', 'COUNTY': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Studylocation_10.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'Hidden', 'ATTR_1': 'Hidden', });
lyr_Countyboundary_11.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'COUNTY_NAM': 'TextEdit', 'COUNTY_COD': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_SamburuCounty_1.set('fieldLabels', {});
lyr_MeruCounty_2.set('fieldLabels', {});
lyr_MarsabitCounty_3.set('fieldLabels', {});
lyr_LaikipiaCounty_4.set('fieldLabels', {});
lyr_KwaleCounty_5.set('fieldLabels', {});
lyr_KiambuCounty_6.set('fieldLabels', {});
lyr_KajiadoCounty_7.set('fieldLabels', {});
lyr_IsioloCounty_8.set('fieldLabels', {});
lyr_HomabayCounty_9.set('fieldLabels', {});
lyr_Studylocation_10.set('fieldLabels', {'NAME': 'inline label - always visible', });
lyr_Countyboundary_11.set('fieldLabels', {'COUNTY_NAM': 'inline label - always visible', });
lyr_Countyboundary_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});