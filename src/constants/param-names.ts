import { ProductParamEnum } from '../interfaces';

export const PARAM_NAMES: { [key in ProductParamEnum]: string } = {
  [ProductParamEnum.SIZES_AND_WEIGHT]: 'Размеры и вес',
  [ProductParamEnum.DISPLAY]: 'Экран',
  [ProductParamEnum.RESISTANCE]: 'Защита',
  [ProductParamEnum.PROCESSOR]: 'Процессор',
  [ProductParamEnum.CAMERA]: 'Камера',
  [ProductParamEnum.FRONT_CAMERA]: 'Фронтальная камера',
  [ProductParamEnum.VIDEO_RECORDING]: 'Видеозапись',
  [ProductParamEnum.FACE_ID]: 'Face ID',
  [ProductParamEnum.APPLE_PAY]: 'Apple Pay',
  [ProductParamEnum.CELLULAR_AND_WIRELESS]: 'Связь',
  [ProductParamEnum.LOCATION]: 'Местоположение',
  [ProductParamEnum.AUDIO_PLAYBACK]: 'Воспроизведение звука',
  [ProductParamEnum.VIDEO_PLAYBACK]: 'Воспроизведение видео',
  [ProductParamEnum.SIRI]: 'Siri',
  [ProductParamEnum.POWER_AND_BATTERY]: 'Аккумулятор',
  [ProductParamEnum.SENSORS]: 'Датчики',
  [ProductParamEnum.OPERATING_SYSTEM]: 'Операционная система'
};
