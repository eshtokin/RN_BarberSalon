function getLineHeight(fs: number, percent: number) {
  return fs + fs * percent;
}

const h1LineHeight = 34;
const h2LineHeight = 26;
const h3LineHeight = 22;
const hLineHeight = getLineHeight(h1LineHeight, 0.2);

const t1FontSize = 18;
const t1LineHeight = getLineHeight(t1FontSize, 0.4);
const t2FontSize = 16;
const t2LineHeight = getLineHeight(t2FontSize, 0.4);
const t3FontSize = 14;
const t3LineHeight = getLineHeight(t2FontSize, 0.4);
const t4FontSize = 14;
const t4LineHeight = getLineHeight(t2FontSize, 0.4);
const t5FontSize = 14;
const t5LineHeight = getLineHeight(t2FontSize, 0.4);

const Typography = {
  h1: {
    fontSize: h1LineHeight,
    lineHeight: hLineHeight,
    fontFamily: 'Vidaloka-Regular',
  },
  h2: {
    fontSize: h2LineHeight,
    lineHeight: hLineHeight,
    fontFamily: 'Vidaloka-Regular',
  },
  h3: {
    fontSize: h3LineHeight,
    lineHeight: hLineHeight,
    fontFamily: 'Vidaloka-Regular',
  },
  T1bold: {
    fontSize: t1FontSize,
    lineHeight: t1LineHeight,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  T1semiBold: {
    fontSize: t1FontSize,
    lineHeight: t1LineHeight,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  T1medium: {
    fontSize: t1FontSize,
    lineHeight: t1LineHeight,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  T1regular: {
    fontSize: t1FontSize,
    lineHeight: t1LineHeight,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  T2bold: {
    fontSize: t2FontSize,
    lineHeight: t2LineHeight,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  T2semiBold: {
    fontSize: t2FontSize,
    lineHeight: t2LineHeight,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  T2medium: {
    fontSize: t2FontSize,
    lineHeight: t2LineHeight,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  T2regular: {
    fontSize: t2FontSize,
    lineHeight: t2LineHeight,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  T3bold: {
    fontSize: t3FontSize,
    lineHeight: t3LineHeight,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  T3semiBold: {
    fontSize: t3FontSize,
    lineHeight: t3LineHeight,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  T3medium: {
    fontSize: t3FontSize,
    lineHeight: t3LineHeight,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  T3regular: {
    fontSize: t3FontSize,
    lineHeight: t3LineHeight,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  T4bold: {
    fontSize: t4FontSize,
    lineHeight: t4LineHeight,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  T4semiBold: {
    fontSize: t4FontSize,
    lineHeight: t4LineHeight,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  T4medium: {
    fontSize: t4FontSize,
    lineHeight: t4LineHeight,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  T4regular: {
    fontSize: t4FontSize,
    lineHeight: t4LineHeight,
    fontFamily: 'PlusJakartaSans-Regular',
  },
  T5bold: {
    fontSize: t5FontSize,
    lineHeight: t5LineHeight,
    fontFamily: 'PlusJakartaSans-Bold',
  },
  T5semiBold: {
    fontSize: t5FontSize,
    lineHeight: t4LineHeight,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  T5medium: {
    fontSize: t5FontSize,
    lineHeight: t5LineHeight,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  T5regular: {
    fontSize: t5FontSize,
    lineHeight: t5LineHeight,
    fontFamily: 'PlusJakartaSans-Regular',
  },
};

export default Typography;
