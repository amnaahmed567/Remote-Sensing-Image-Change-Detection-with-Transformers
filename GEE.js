#all the imports are included in the link present in the readme file

print("This data is made available by the Global Land Analysis and Discovery (GLAD) lab at the University of Maryland.","P.V. Potapov, M.C. Hansen, A.H. Pickens, A. Hernandez-Serna, A. Tyukavina, S. Turubanova, V. Zalles, X. Li, A. Khan, F. Stolle, N. Harris, X.-P. Song, A. Baggett, I. Kommareddy, A. Komareddy (2022).");
print("For more information please visit:",ui.Label(" https://glad.umd.edu/dataset/GLCLUC2020",{},"https://glad.umd.edu/dataset/GLCLUC2020"),
  "The legend is available here:",ui.Label(" https://storage.googleapis.com/earthenginepartners-hansen/GLCLU2000-2020/v2/legend.xlsx",{},"https://storage.googleapis.com/earthenginepartners-hansen/GLCLU2000-2020/v2/legend.xlsx"));
var landmask = ee.Image("projects/glad/OceanMask").lte(1)
var m00 = ee.Image('projects/glad/GLCLU2020/v2/LCLUC_2000').updateMask(landmask);
var m20 = ee.Image('projects/glad/GLCLU2020/v2/LCLUC_2020').updateMask(landmask);
var change =ee.Image('projects/glad/GLCLU2020/v2/LCLUC').updateMask(landmask);

Map.addLayer(m00,visParamMap,'2000 land cover and land use')
Map.addLayer(m20,visParamMap,'2020 land cover and land use')

var topLeft = ee.Geometry.Point([126.6033, 37.4083]);
var resolution = 30;  // meters per pixel
var bottomRight = ee.Geometry.Point([
  topLeft.coordinates().get(0).getInfo() + (1792 * resolution / 111320),  // longitude adjustment (East)
  topLeft.coordinates().get(1).getInfo() - (1792 * resolution / 110540)   // latitude adjustment (South)
]);
var roi2 = ee.Geometry.Rectangle([
  topLeft.coordinates().get(0).getInfo(),  // minLon (top-left longitude)
  bottomRight.coordinates().get(1).getInfo(),  // minLat (bottom-right latitude)
  bottomRight.coordinates().get(0).getInfo(),  // maxLon (bottom-right longitude)
  topLeft.coordinates().get(1).getInfo()   // maxLat (top-left latitude)
]);

print('ROI:', roi2);
Map.centerObject(roi2, 9);
Map.addLayer(roi2, {color: 'red'}, 'ROI');
var years = [2000, 2020];  // we can modify this list to include the years we want

var selectedBands = ['B3', 'B2', 'B1']
function maskClouds(image) {
  var cloudScore = ee.Algorithms.Landsat.simpleCloudScore(image).select('cloud');
  return image.updateMask(cloudScore.lt(10));  // we may adjust threshold as needed
}
// looping through each year to display the data
years.forEach(function(year) {
  // defining date range for the year
  var startDate = ee.Date.fromYMD(year, 1, 1);
  var endDate = ee.Date.fromYMD(year, 12, 31);
    var landsat7 = landsat_7
                  .filterDate(startDate, endDate)
                  .filterBounds(roi2)
                   //.map(maskClouds)
                  .filterMetadata('CLOUD_COVER','less_than',20)
                  .select(selectedBands)
                  .median()
                  .clip(roi2);
  Export.image.toDrive({
  image: landsat7,
  description: 'Median_Image_1792_China_' + year,
  folder: 'Satellite Images New',
  fileNamePrefix: 'Median_Image_1792_China_' + year,
  scale: 30, // Ensure the scale is set to 100 meters
  region: roi2,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e13,});


  // adding the median image to the map
  Map.addLayer(landsat7, imageVisParam5, 'Median Image ' + year);
});

Map.addLayer(m00.clip(roi2),visParamMap,'2000 land cover and land use')
Map.addLayer(m20.clip(roi2),visParamMap,'2020 land cover and land use')
Map.addLayer(change.clip(roi2),visParamMap,'Change Map')

 Export.image.toDrive({
  image: m00.clip(roi2),
  description: 'Landcover_1792_China_2000',
  folder: 'Satellite Images New',
  fileNamePrefix: 'Landcover_1792_China_2000',
  scale: 30, // Ensure the scale is set to 100 meters
  region: roi2,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e13,});
  Export.image.toDrive({
  image: m20.clip(roi2),
  description:  'Landcover_1792_China_2020',
  folder: 'Satellite Images New',
  fileNamePrefix: 'Landcover_1792_China_2020',
  scale: 30, // Ensure the scale is set to 100 meters
  region: roi2,
  fileFormat: 'GeoTIFF',
  maxPixels: 1e13,});
var image_2000 = landsat_7
                  .filterDate('2000-01-01','2000-12-31')
                  .filterMetadata('CLOUD_COVER','less_than',20)
                  .select(selectedBands)
                  .median()
Map.addLayer(image_2000,imageVisParam8,'2000')
var image_2020 = landsat_7
                  .filterDate('2020-01-01','2020-12-31')
                  .filterMetadata('CLOUD_COVER','less_than',20)
                  .select(selectedBands)
                  .median()
Map.addLayer(image_2020,imageVisParam8,'2020')


