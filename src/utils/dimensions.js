import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

let { width, height } = Dimensions.get('window');
const screenWidth = Math.min(width, height);
const screenHeight = Math.max(width, height);

const isIOS = Platform.OS === 'ios';

export const isTab = DeviceInfo.isTablet();

const scale = isTab ? screenWidth / 768 : screenWidth / 375;
const scaleHeight = isTab ? screenHeight / 1024 : screenHeight / 667;

const normalize = (size, based = 'width') => {
  const newSize = based === 'height' ? size * scaleHeight : size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};


export { isIOS, normalize };