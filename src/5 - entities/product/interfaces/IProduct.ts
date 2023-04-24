export type IProduct = { [key in ProductParamEnum]?: string } & {
  id: string;
  name: string;
  type: ProductTypeEnum;
  price?: number;
  video?: string;
  averageRate?: number;
  configurations?: Configuration[];
  colors: Color[];
};

export interface Configuration {
  name: ProductConfigurationEnum;
  value: string;
  extraPrice: number;
}

export interface Color {
  name: string;
  value: string;
  photos: string[];
}

export enum ProductTypeEnum {
  Mac = 'Mac',
  iPad = 'iPad',
  iPhone = 'iPhone',
  Watch = 'Watch',
  AirPods = 'AirPods'
}

export enum ProductParamEnum {
  SIZES_AND_WEIGHT = 'sizesAndWeight',
  DISPLAY = 'display',
  RESISTANCE = 'resistance',
  PROCESSOR = 'processor',
  CAMERA = 'camera',
  FRONT_CAMERA = 'frontCamera',
  VIDEO_RECORDING = 'videoRecording',
  FACE_ID = 'faceID',
  APPLE_PAY = 'applePay',
  CELLULAR_AND_WIRELESS = 'cellularAndWireless',
  LOCATION = 'location',
  AUDIO_PLAYBACK = 'audioPlayback',
  VIDEO_PLAYBACK = 'videoPlayback',
  SIRI = 'siri',
  POWER_AND_BATTERY = 'powerAndBattery',
  SENSORS = 'sensors',
  OPERATING_SYSTEM = 'operatingSystem'
}

export enum ProductConfigurationEnum {
  STORAGE = 'storage',
  MEMORY = 'memory',
  PROCESSOR = 'processor'
}
