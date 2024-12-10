var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gadm41_IDNADM_ADM_4_1 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_1 = format_gadm41_IDNADM_ADM_4_1.readFeatures(json_gadm41_IDNADM_ADM_4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_1.addFeatures(features_gadm41_IDNADM_ADM_4_1);
var lyr_gadm41_IDNADM_ADM_4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_1, 
                style: style_gadm41_IDNADM_ADM_4_1,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
    title: 'gadm41_IDN — ADM_ADM_4<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_0.png" /> Karangmangu<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_1.png" /> Karangsalam<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_2.png" /> Karangtengah<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_3.png" /> Kebumen<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_4.png" /> Kemutug Kidul<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_5.png" /> Kemutug Lor<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_6.png" /> Ketenger<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_7.png" /> Kutasari<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_8.png" /> Pamijen<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_9.png" /> Pandak<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_10.png" /> Purwosari<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_11.png" /> Rempoah<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_1_12.png" /> <br />'
        });
var format_ADMINISTRASIDESA_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_2 = format_ADMINISTRASIDESA_AR_25K_2.readFeatures(json_ADMINISTRASIDESA_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_2.addFeatures(features_ADMINISTRASIDESA_AR_25K_2);
var lyr_ADMINISTRASIDESA_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_2, 
                style: style_ADMINISTRASIDESA_AR_25K_2,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_2.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_AGRIKEBUN_AR_25K_3 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_25K_3 = format_AGRIKEBUN_AR_25K_3.readFeatures(json_AGRIKEBUN_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_25K_3.addFeatures(features_AGRIKEBUN_AR_25K_3);
var lyr_AGRIKEBUN_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_25K_3, 
                style: style_AGRIKEBUN_AR_25K_3,
                popuplayertitle: "AGRIKEBUN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_25K_3.png" /> AGRIKEBUN_AR_25K'
            });
var format_AGRISAWAH_AR_25K_4 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_4 = format_AGRISAWAH_AR_25K_4.readFeatures(json_AGRISAWAH_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_4.addFeatures(features_AGRISAWAH_AR_25K_4);
var lyr_AGRISAWAH_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_4, 
                style: style_AGRISAWAH_AR_25K_4,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_4.png" /> AGRISAWAH_AR_25K'
            });
var format_SUNGAI_LN_25K_5 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_5 = format_SUNGAI_LN_25K_5.readFeatures(json_SUNGAI_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_5.addFeatures(features_SUNGAI_LN_25K_5);
var lyr_SUNGAI_LN_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_5, 
                style: style_SUNGAI_LN_25K_5,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_5.png" /> SUNGAI_LN_25K'
            });
var format_Bataswilayahrt_6 = new ol.format.GeoJSON();
var features_Bataswilayahrt_6 = format_Bataswilayahrt_6.readFeatures(json_Bataswilayahrt_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataswilayahrt_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataswilayahrt_6.addFeatures(features_Bataswilayahrt_6);
var lyr_Bataswilayahrt_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bataswilayahrt_6, 
                style: style_Bataswilayahrt_6,
                popuplayertitle: "Batas wilayah rt",
                interactive: true,
    title: 'Batas wilayah rt<br />\
    <img src="styles/legend/Bataswilayahrt_6_0.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_1.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_2.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_3.png" /> RT 01 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_4.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_5.png" /> RT 02 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_6.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_7.png" /> RT 02 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_8.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_9.png" /> RT 03 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_10.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_11.png" /> RT 03 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_12.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_13.png" /> RT 04 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_14.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_15.png" /> RT 04 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_16.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_17.png" /> RT 05 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_18.png" /> RT 05 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_19.png" /> RT 05 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_20.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_21.png" /> RT 06 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_22.png" /> RT 06 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_23.png" /> RT 06 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_24.png" /> RT 07 RW 01<br />\
    <img src="styles/legend/Bataswilayahrt_6_25.png" /> RT 07 RW 02<br />\
    <img src="styles/legend/Bataswilayahrt_6_26.png" /> RT 07 RW 03<br />\
    <img src="styles/legend/Bataswilayahrt_6_27.png" /> RT 07 RW 04<br />\
    <img src="styles/legend/Bataswilayahrt_6_28.png" /> <br />'
        });
var format_desaku_line_7 = new ol.format.GeoJSON();
var features_desaku_line_7 = format_desaku_line_7.readFeatures(json_desaku_line_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desaku_line_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desaku_line_7.addFeatures(features_desaku_line_7);
var lyr_desaku_line_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desaku_line_7, 
                style: style_desaku_line_7,
                popuplayertitle: "desaku_line",
                interactive: true,
                title: '<img src="styles/legend/desaku_line_7.png" /> desaku_line'
            });
var format_desaku_poly_8 = new ol.format.GeoJSON();
var features_desaku_poly_8 = format_desaku_poly_8.readFeatures(json_desaku_poly_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desaku_poly_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desaku_poly_8.addFeatures(features_desaku_poly_8);
var lyr_desaku_poly_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desaku_poly_8, 
                style: style_desaku_poly_8,
                popuplayertitle: "desaku_poly",
                interactive: true,
                title: '<img src="styles/legend/desaku_poly_8.png" /> desaku_poly'
            });
var format_RumahKetuartrw_9 = new ol.format.GeoJSON();
var features_RumahKetuartrw_9 = format_RumahKetuartrw_9.readFeatures(json_RumahKetuartrw_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKetuartrw_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuartrw_9.addFeatures(features_RumahKetuartrw_9);
var lyr_RumahKetuartrw_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuartrw_9, 
                style: style_RumahKetuartrw_9,
                popuplayertitle: "Rumah Ketua rt rw",
                interactive: true,
                title: '<img src="styles/legend/RumahKetuartrw_9.png" /> Rumah Ketua rt rw'
            });
var format_layananmasyarakat_10 = new ol.format.GeoJSON();
var features_layananmasyarakat_10 = format_layananmasyarakat_10.readFeatures(json_layananmasyarakat_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layananmasyarakat_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layananmasyarakat_10.addFeatures(features_layananmasyarakat_10);
var lyr_layananmasyarakat_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layananmasyarakat_10, 
                style: style_layananmasyarakat_10,
                popuplayertitle: "layanan masyarakat",
                interactive: true,
                title: '<img src="styles/legend/layananmasyarakat_10.png" /> layanan masyarakat'
            });
var format_usahamasyarakat_11 = new ol.format.GeoJSON();
var features_usahamasyarakat_11 = format_usahamasyarakat_11.readFeatures(json_usahamasyarakat_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usahamasyarakat_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usahamasyarakat_11.addFeatures(features_usahamasyarakat_11);
var lyr_usahamasyarakat_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_usahamasyarakat_11, 
                style: style_usahamasyarakat_11,
                popuplayertitle: "usaha masyarakat",
                interactive: true,
                title: '<img src="styles/legend/usahamasyarakat_11.png" /> usaha masyarakat'
            });
var format_saranapendidikan_12 = new ol.format.GeoJSON();
var features_saranapendidikan_12 = format_saranapendidikan_12.readFeatures(json_saranapendidikan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saranapendidikan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saranapendidikan_12.addFeatures(features_saranapendidikan_12);
var lyr_saranapendidikan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_saranapendidikan_12, 
                style: style_saranapendidikan_12,
                popuplayertitle: "sarana pendidikan",
                interactive: true,
                title: '<img src="styles/legend/saranapendidikan_12.png" /> sarana pendidikan'
            });
var format_saranaibadah_13 = new ol.format.GeoJSON();
var features_saranaibadah_13 = format_saranaibadah_13.readFeatures(json_saranaibadah_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saranaibadah_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saranaibadah_13.addFeatures(features_saranaibadah_13);
var lyr_saranaibadah_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_saranaibadah_13, 
                style: style_saranaibadah_13,
                popuplayertitle: "sarana ibadah",
                interactive: true,
                title: '<img src="styles/legend/saranaibadah_13.png" /> sarana ibadah'
            });
var format_ADMINISTRASIDESA_AR_25K_14 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_14 = format_ADMINISTRASIDESA_AR_25K_14.readFeatures(json_ADMINISTRASIDESA_AR_25K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_14.addFeatures(features_ADMINISTRASIDESA_AR_25K_14);
var lyr_ADMINISTRASIDESA_AR_25K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_14, 
                style: style_ADMINISTRASIDESA_AR_25K_14,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_14.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_WilayahRTRW_15 = new ol.format.GeoJSON();
var features_WilayahRTRW_15 = format_WilayahRTRW_15.readFeatures(json_WilayahRTRW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahRTRW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahRTRW_15.addFeatures(features_WilayahRTRW_15);
var lyr_WilayahRTRW_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahRTRW_15, 
                style: style_WilayahRTRW_15,
                popuplayertitle: "Wilayah RT RW",
                interactive: true,
    title: 'Wilayah RT RW<br />\
    <img src="styles/legend/WilayahRTRW_15_0.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_15_1.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_2.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_3.png" /> RT 01 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_15_4.png" /> RT 01 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_15_5.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_15_6.png" /> RT 02 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_7.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_8.png" /> RT 02 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_15_9.png" /> RT 02 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_15_10.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_15_11.png" /> RT 03 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_12.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_13.png" /> RT 03 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_15_14.png" /> RT 03 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_15_15.png" /> RT 03 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_15_16.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_15_17.png" /> RT 04 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_18.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_19.png" /> RT 04 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_15_20.png" /> RT 04 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_15_21.png" /> RT 04 RW 06<br />\
    <img src="styles/legend/WilayahRTRW_15_22.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_15_23.png" /> RT 05 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_24.png" /> RT 05 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_25.png" /> RT 05 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_15_26.png" /> RT 05 RW 05<br />\
    <img src="styles/legend/WilayahRTRW_15_27.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/WilayahRTRW_15_28.png" /> RT 06 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_29.png" /> RT 06 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_30.png" /> RT 06 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_15_31.png" /> RT 07 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_32.png" /> RT 07 RW 03<br />\
    <img src="styles/legend/WilayahRTRW_15_33.png" /> RT 07 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_15_34.png" /> RT 08 RW 02<br />\
    <img src="styles/legend/WilayahRTRW_15_35.png" /> RT 08 RW 04<br />\
    <img src="styles/legend/WilayahRTRW_15_36.png" /> RW 07<br />\
    <img src="styles/legend/WilayahRTRW_15_37.png" /> <br />'
        });
var format_baru_line_16 = new ol.format.GeoJSON();
var features_baru_line_16 = format_baru_line_16.readFeatures(json_baru_line_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baru_line_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baru_line_16.addFeatures(features_baru_line_16);
var lyr_baru_line_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_baru_line_16, 
                style: style_baru_line_16,
                popuplayertitle: "baru_line",
                interactive: true,
                title: '<img src="styles/legend/baru_line_16.png" /> baru_line'
            });
var format_AGRISAWAH_AR_25K_17 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_17 = format_AGRISAWAH_AR_25K_17.readFeatures(json_AGRISAWAH_AR_25K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_17.addFeatures(features_AGRISAWAH_AR_25K_17);
var lyr_AGRISAWAH_AR_25K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_17, 
                style: style_AGRISAWAH_AR_25K_17,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_17.png" /> AGRISAWAH_AR_25K'
            });
var format_baru_poly_18 = new ol.format.GeoJSON();
var features_baru_poly_18 = format_baru_poly_18.readFeatures(json_baru_poly_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_baru_poly_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_baru_poly_18.addFeatures(features_baru_poly_18);
var lyr_baru_poly_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_baru_poly_18, 
                style: style_baru_poly_18,
                popuplayertitle: "baru_poly",
                interactive: true,
                title: '<img src="styles/legend/baru_poly_18.png" /> baru_poly'
            });
var format_UMKM_19 = new ol.format.GeoJSON();
var features_UMKM_19 = format_UMKM_19.readFeatures(json_UMKM_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKM_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKM_19.addFeatures(features_UMKM_19);
var lyr_UMKM_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKM_19, 
                style: style_UMKM_19,
                popuplayertitle: "UMKM",
                interactive: true,
                title: '<img src="styles/legend/UMKM_19.png" /> UMKM'
            });
var format_TempatIbadah_20 = new ol.format.GeoJSON();
var features_TempatIbadah_20 = format_TempatIbadah_20.readFeatures(json_TempatIbadah_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_20.addFeatures(features_TempatIbadah_20);
var lyr_TempatIbadah_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_20, 
                style: style_TempatIbadah_20,
                popuplayertitle: "Tempat Ibadah",
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_20.png" /> Tempat Ibadah'
            });
var format_SUNGAI_LN_25K_21 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_21 = format_SUNGAI_LN_25K_21.readFeatures(json_SUNGAI_LN_25K_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_21.addFeatures(features_SUNGAI_LN_25K_21);
var lyr_SUNGAI_LN_25K_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_21, 
                style: style_SUNGAI_LN_25K_21,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_21.png" /> SUNGAI_LN_25K'
            });
var format_RumahKetuaRT_22 = new ol.format.GeoJSON();
var features_RumahKetuaRT_22 = format_RumahKetuaRT_22.readFeatures(json_RumahKetuaRT_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahKetuaRT_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahKetuaRT_22.addFeatures(features_RumahKetuaRT_22);
var lyr_RumahKetuaRT_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahKetuaRT_22, 
                style: style_RumahKetuaRT_22,
                popuplayertitle: "Rumah Ketua RT",
                interactive: true,
                title: '<img src="styles/legend/RumahKetuaRT_22.png" /> Rumah Ketua RT'
            });
var format_Pendidikan_23 = new ol.format.GeoJSON();
var features_Pendidikan_23 = format_Pendidikan_23.readFeatures(json_Pendidikan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_23.addFeatures(features_Pendidikan_23);
var lyr_Pendidikan_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_23, 
                style: style_Pendidikan_23,
                popuplayertitle: "Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_23.png" /> Pendidikan'
            });
var format_Pemerintahan_24 = new ol.format.GeoJSON();
var features_Pemerintahan_24 = format_Pemerintahan_24.readFeatures(json_Pemerintahan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_24.addFeatures(features_Pemerintahan_24);
var lyr_Pemerintahan_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_24, 
                style: style_Pemerintahan_24,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_24.png" /> Pemerintahan'
            });
var format_Kesehatan_25 = new ol.format.GeoJSON();
var features_Kesehatan_25 = format_Kesehatan_25.readFeatures(json_Kesehatan_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_25.addFeatures(features_Kesehatan_25);
var lyr_Kesehatan_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_25, 
                style: style_Kesehatan_25,
                popuplayertitle: "Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_25.png" /> Kesehatan'
            });
var group_desarempoah = new ol.layer.Group({
                                layers: [lyr_ADMINISTRASIDESA_AR_25K_14,lyr_WilayahRTRW_15,lyr_baru_line_16,lyr_AGRISAWAH_AR_25K_17,lyr_baru_poly_18,lyr_UMKM_19,lyr_TempatIbadah_20,lyr_SUNGAI_LN_25K_21,lyr_RumahKetuaRT_22,lyr_Pendidikan_23,lyr_Pemerintahan_24,lyr_Kesehatan_25,],
                                fold: "open",
                                title: "desa rempoah"});
var group_desakebumen = new ol.layer.Group({
                                layers: [lyr_ADMINISTRASIDESA_AR_25K_2,lyr_AGRIKEBUN_AR_25K_3,lyr_AGRISAWAH_AR_25K_4,lyr_SUNGAI_LN_25K_5,lyr_Bataswilayahrt_6,lyr_desaku_line_7,lyr_desaku_poly_8,lyr_RumahKetuartrw_9,lyr_layananmasyarakat_10,lyr_usahamasyarakat_11,lyr_saranapendidikan_12,lyr_saranaibadah_13,],
                                fold: "open",
                                title: "desa kebumen"});

lyr_OpenStreetMap_0.setVisible(true);lyr_gadm41_IDNADM_ADM_4_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_2.setVisible(true);lyr_AGRIKEBUN_AR_25K_3.setVisible(true);lyr_AGRISAWAH_AR_25K_4.setVisible(true);lyr_SUNGAI_LN_25K_5.setVisible(true);lyr_Bataswilayahrt_6.setVisible(true);lyr_desaku_line_7.setVisible(true);lyr_desaku_poly_8.setVisible(true);lyr_RumahKetuartrw_9.setVisible(true);lyr_layananmasyarakat_10.setVisible(true);lyr_usahamasyarakat_11.setVisible(true);lyr_saranapendidikan_12.setVisible(true);lyr_saranaibadah_13.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_14.setVisible(true);lyr_WilayahRTRW_15.setVisible(true);lyr_baru_line_16.setVisible(true);lyr_AGRISAWAH_AR_25K_17.setVisible(true);lyr_baru_poly_18.setVisible(true);lyr_UMKM_19.setVisible(true);lyr_TempatIbadah_20.setVisible(true);lyr_SUNGAI_LN_25K_21.setVisible(true);lyr_RumahKetuaRT_22.setVisible(true);lyr_Pendidikan_23.setVisible(true);lyr_Pemerintahan_24.setVisible(true);lyr_Kesehatan_25.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_gadm41_IDNADM_ADM_4_1,group_desakebumen,group_desarempoah];
lyr_gadm41_IDNADM_ADM_4_1.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Bataswilayahrt_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_desaku_line_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'width': 'width', 'diameter': 'diameter', 'blockage': 'blockage', 'bridge': 'bridge', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'highway': 'highway', 'parking': 'parking', 'name': 'name', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'oneway': 'oneway', 'building': 'building', 'man_made': 'man_made', 'tunnel': 'tunnel', 'operator': 'operator', 'waterway': 'waterway', 'aeroway': 'aeroway', 'railway': 'railway', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'capacity': 'capacity', });
lyr_desaku_poly_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'historic': 'historic', 'width': 'width', 'beds': 'beds', 'diameter': 'diameter', 'access_roo': 'access_roo', 'government': 'government', 'blockage': 'blockage', 'bridge': 'bridge', 'rooms': 'rooms', 'landuse': 'landuse', 'water': 'water', 'smoothness': 'smoothness', 'office': 'office', 'highway': 'highway', 'name': 'name', 'parking': 'parking', 'natural': 'natural', 'amenity': 'amenity', 'layer': 'layer', 'barrier': 'barrier', 'covered': 'covered', 'addr_stree': 'addr_stree', 'oneway': 'oneway', 'building': 'building', 'opening_ho': 'opening_ho', 'tourism': 'tourism', 'addr_house': 'addr_house', 'man_made': 'man_made', 'building_m': 'building_m', 'operator': 'operator', 'shop': 'shop', 'tunnel': 'tunnel', 'waterway': 'waterway', 'aeroway': 'aeroway', 'military': 'military', 'railway': 'railway', 'roof_mater': 'roof_mater', 'pump': 'pump', 'surface': 'surface', 'public_tra': 'public_tra', 'denominati': 'denominati', 'capacity': 'capacity', 'religion': 'religion', });
lyr_RumahKetuartrw_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_layananmasyarakat_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_usahamasyarakat_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_saranapendidikan_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_saranaibadah_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ADMINISTRASIDESA_AR_25K_14.set('fieldAliases', {'id': 'id', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_WilayahRTRW_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_baru_line_16.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'smoothness': 'smoothness', 'railway': 'railway', 'tunnel': 'tunnel', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'amenity': 'amenity', 'width': 'width', 'barrier': 'barrier', 'name': 'name', 'surface': 'surface', 'bridge': 'bridge', 'highway': 'highway', 'building': 'building', 'oneway': 'oneway', 'operator': 'operator', 'public_tra': 'public_tra', });
lyr_AGRISAWAH_AR_25K_17.set('fieldAliases', {'id': 'id', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_baru_poly_18.set('fieldAliases', {'id': 'id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'tunnel': 'tunnel', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'addr_house': 'addr_house', 'width': 'width', 'building': 'building', 'isced_leve': 'isced_leve', 'operator': 'operator', 'healthcare': 'healthcare', 'access_roo': 'access_roo', 'health_f_1': 'health_f_1', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'building_m': 'building_m', 'opening_ho': 'opening_ho', 'smoothness': 'smoothness', 'railway': 'railway', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'name': 'name', 'bridge': 'bridge', 'operator_t': 'operator_t', 'rooms': 'rooms', 'status': 'status', 'network': 'network', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'highway': 'highway', 'surface': 'surface', 'oneway': 'oneway', 'public_tra': 'public_tra', });
lyr_UMKM_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_SUNGAI_LN_25K_21.set('fieldAliases', {'id': 'id', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RumahKetuaRT_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pendidikan_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pemerintahan_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_25.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRIKEBUN_AR_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Bataswilayahrt_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_desaku_line_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'width': 'TextEdit', 'diameter': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'highway': 'TextEdit', 'parking': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'man_made': 'TextEdit', 'tunnel': 'TextEdit', 'operator': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'capacity': 'TextEdit', });
lyr_desaku_poly_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'historic': 'TextEdit', 'width': 'TextEdit', 'beds': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'government': 'TextEdit', 'blockage': 'TextEdit', 'bridge': 'TextEdit', 'rooms': 'TextEdit', 'landuse': 'TextEdit', 'water': 'TextEdit', 'smoothness': 'TextEdit', 'office': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'parking': 'TextEdit', 'natural': 'TextEdit', 'amenity': 'TextEdit', 'layer': 'TextEdit', 'barrier': 'TextEdit', 'covered': 'TextEdit', 'addr_stree': 'TextEdit', 'oneway': 'TextEdit', 'building': 'TextEdit', 'opening_ho': 'TextEdit', 'tourism': 'TextEdit', 'addr_house': 'TextEdit', 'man_made': 'TextEdit', 'building_m': 'TextEdit', 'operator': 'TextEdit', 'shop': 'TextEdit', 'tunnel': 'TextEdit', 'waterway': 'TextEdit', 'aeroway': 'TextEdit', 'military': 'TextEdit', 'railway': 'TextEdit', 'roof_mater': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'public_tra': 'TextEdit', 'denominati': 'TextEdit', 'capacity': 'TextEdit', 'religion': 'TextEdit', });
lyr_RumahKetuartrw_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_layananmasyarakat_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_usahamasyarakat_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_saranapendidikan_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_saranaibadah_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_14.set('fieldImages', {'id': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_WilayahRTRW_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_baru_line_16.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'tunnel': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'amenity': 'TextEdit', 'width': 'TextEdit', 'barrier': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'bridge': 'TextEdit', 'highway': 'TextEdit', 'building': 'TextEdit', 'oneway': 'TextEdit', 'operator': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_17.set('fieldImages', {'id': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_baru_poly_18.set('fieldImages', {'id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'tunnel': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'building': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'healthcare': 'TextEdit', 'access_roo': 'TextEdit', 'health_f_1': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'building_m': 'TextEdit', 'opening_ho': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'status': 'TextEdit', 'network': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_UMKM_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatIbadah_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_SUNGAI_LN_25K_21.set('fieldImages', {'id': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RumahKetuaRT_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pendidikan_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pemerintahan_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kesehatan_25.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_1.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Bataswilayahrt_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_desaku_line_7.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'width': 'no label', 'diameter': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'landuse': 'no label', 'water': 'no label', 'smoothness': 'no label', 'highway': 'no label', 'parking': 'no label', 'name': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'oneway': 'no label', 'building': 'no label', 'man_made': 'no label', 'tunnel': 'no label', 'operator': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'railway': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'capacity': 'no label', });
lyr_desaku_poly_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'historic': 'no label', 'width': 'no label', 'beds': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'government': 'no label', 'blockage': 'no label', 'bridge': 'no label', 'rooms': 'no label', 'landuse': 'no label', 'water': 'no label', 'smoothness': 'no label', 'office': 'no label', 'highway': 'no label', 'name': 'no label', 'parking': 'no label', 'natural': 'no label', 'amenity': 'no label', 'layer': 'no label', 'barrier': 'no label', 'covered': 'no label', 'addr_stree': 'no label', 'oneway': 'no label', 'building': 'no label', 'opening_ho': 'no label', 'tourism': 'no label', 'addr_house': 'no label', 'man_made': 'no label', 'building_m': 'no label', 'operator': 'no label', 'shop': 'no label', 'tunnel': 'no label', 'waterway': 'no label', 'aeroway': 'no label', 'military': 'no label', 'railway': 'no label', 'roof_mater': 'no label', 'pump': 'no label', 'surface': 'no label', 'public_tra': 'no label', 'denominati': 'no label', 'capacity': 'no label', 'religion': 'no label', });
lyr_RumahKetuartrw_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_layananmasyarakat_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_usahamasyarakat_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_saranapendidikan_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_saranaibadah_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_14.set('fieldLabels', {'id': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_WilayahRTRW_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_baru_line_16.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'tunnel': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'amenity': 'no label', 'width': 'no label', 'barrier': 'no label', 'name': 'no label', 'surface': 'no label', 'bridge': 'no label', 'highway': 'no label', 'building': 'no label', 'oneway': 'no label', 'operator': 'no label', 'public_tra': 'no label', });
lyr_AGRISAWAH_AR_25K_17.set('fieldLabels', {'id': 'no label', 'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_baru_poly_18.set('fieldLabels', {'id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'tunnel': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'addr_house': 'no label', 'width': 'no label', 'building': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'access_roo': 'no label', 'health_f_1': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'building_m': 'no label', 'opening_ho': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'name': 'no label', 'bridge': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'status': 'no label', 'network': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'highway': 'no label', 'surface': 'no label', 'oneway': 'no label', 'public_tra': 'no label', });
lyr_UMKM_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TempatIbadah_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_SUNGAI_LN_25K_21.set('fieldLabels', {'id': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RumahKetuaRT_22.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pendidikan_23.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pemerintahan_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kesehatan_25.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Kesehatan_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});