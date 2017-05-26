demobbed.resetEvent();

demobbed.event().id(11103017334);
demobbed.event().date(1302673655000);

demobbed.event().hitsTT()[0] = [
  new HitTT(10000, -46.04, 362.59, 4.32),
  new HitTT(10001, -48.68, 362.59, 73.85),
  new HitTT(10002, -51.32, 362.59, 145.22),
  new HitTT(10003, -41.3, 375.99, 59.4),
  new HitTT(10004, -54.5, 375.99, 22.62),
  new HitTT(10005, -43.94, 375.99, 10.54),
  new HitTT(10006, -46.58, 375.99, 108.63),
  new HitTT(10007, -49.22, 375.99, 55.71),
  new HitTT(10008, -51.86, 375.99, 86.23),
  new HitTT(10009, -59.78, 375.99, 3.6),
  new HitTT(10010, -56.87, 389.39, 32.03),
  new HitTT(10011, -54.23, 389.39, 31.6),
  new HitTT(10012, -46.31, 389.39, 118.19),
  new HitTT(10013, -22.55, 389.39, 33.49),
  new HitTT(10014, -30.52, 402.79, 150.51),
  new HitTT(10015, -54.28, 402.79, 45.24),
  new HitTT(10016, -33.16, 402.79, 134.49),
  new HitTT(10017, -56.93, 416.19, 16.59),
  new HitTT(10018, -56.78, 429.59, 18.03),
  new HitTT(10019, -59.09, 442.99, 20),
  new HitTT(10020, -61.79, 456.39, 17.23),
  new HitTT(10021, -61.78, 469.79, 37.16),
  new HitTT(10022, -64.56, 483.19, 19.79),
  new HitTT(10023, -64.6, 496.59, 12.59),
  new HitTT(10024, -67.8, 509.99, 16.96),
  new HitTT(10025, -69.96, 523.39, 94.01),
  new HitTT(10026, -69.88, 536.79, 43.65),
  new HitTT(10027, -72.56, 550.19, 63.14),
  new HitTT(10028, -72.72, 563.59, 7.84)
];

demobbed.event().hitsTT()[1] = [
  new HitTT(11000, -320.41, 361.13, 7.81),
  new HitTT(11001, -339.03, 374.53, 15.3),
  new HitTT(11002, -333.75, 374.53, 270.08),
  new HitTT(11003, -328.47, 374.53, 5.44),
  new HitTT(11004, -354.87, 374.53, 6.81),
  new HitTT(11005, -352.23, 374.53, 28.4),
  new HitTT(11006, -341.67, 374.53, 20.99),
  new HitTT(11007, -331.11, 374.53, 60.33),
  new HitTT(11008, -322.67, 387.93, 94.74),
  new HitTT(11009, -338.51, 387.93, 6.72),
  new HitTT(11010, -333.23, 387.93, 5.94),
  new HitTT(11011, -330.59, 387.93, 22.01),
  new HitTT(11012, -333.27, 401.33, 22.36),
  new HitTT(11013, -333.5, 414.73, 9.49),
  new HitTT(11014, -333.36, 428.13, 11.25),
  new HitTT(11015, -333.38, 441.53, 15.6),
  new HitTT(11016, -333.39, 454.93, 18),
  new HitTT(11017, -333.28, 468.33, 13.42),
  new HitTT(11018, -333.47, 481.73, 7.52),
  new HitTT(11019, -336.01, 495.13, 5.67),
  new HitTT(11020, -333.37, 495.13, 17.97),
  new HitTT(11021, -333.49, 508.53, 21.01),
  new HitTT(11022, -333.81, 521.93, 13.22),
  new HitTT(11023, -333.83, 535.33, 14.32),
  new HitTT(11024, -335.68, 548.73, 27.76),
  new HitTT(11025, -335.78, 562.13, 21.01)
];

demobbed.event().hitsRPC()[0] = [

];

demobbed.event().hitsRPC()[1] = [

];

demobbed.event().hitsDT()[0] = [

];

demobbed.event().vertex([new Vertex([6650.6, 58098.1, 55471], [-50.7219, -333.984, 369.629])]);

demobbed.event().tracksECC([
  new TrackECC(0, 1, [6498.2, 58097.7, 56844], [-0.1093, -0.0033]),
  new TrackECC(1, 2, [6669.4, 58107.9, 55549], [0.2111, 0.1783]),
  new TrackECC(2, 2, [6096, 58461.6, 58124], [-0.2152, 0.1405]),
  new TrackECC(3, 4, [6666.3, 58044.1, 55549], [0.1849, -0.3459]),
  new TrackECC(4, 4, [6693.9, 58022.2, 55549], [0.4215, -0.564])
]);

demobbed.mgrDrawED().onEventChange();
demobbed.mgrDrawECC().onEventChange();
