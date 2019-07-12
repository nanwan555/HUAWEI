/*
Navicat MySQL Data Transfer

Source Server         : 1905
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : huawei

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-07-12 10:59:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `logining`
-- ----------------------------
DROP TABLE IF EXISTS `logining`;
CREATE TABLE `logining` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(22) NOT NULL,
  `password` varchar(40) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of logining
-- ----------------------------
INSERT INTO `logining` VALUES ('1', 'nini1', 'dada@qq.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2019-07-10 10:01:21');
INSERT INTO `logining` VALUES ('2', 'lala', 'lala@qq.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2019-07-10 10:05:47');
INSERT INTO `logining` VALUES ('3', 'haha', 'haha@qq.com', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '2019-07-11 12:52:28');

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `pic` varchar(1000) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `sx` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'Mate 20 Rs 保时捷设计', '12999', 'https://res.vmallres.com/pimages//product/6901443264780/78_78_1539244238246mp.png,https://res.vmallres.com/pimages//product/6901443264780/group//78_78_1539243940829.png,https://res.vmallres.com/pimages//product/6901443264780/group//78_78_1539243945381.png,https://res.vmallres.com/pimages//product/6901443264780/group//78_78_1539243950877.png,https://res.vmallres.com/pimages//product/6901443264780/group//78_78_1539243954172.png,https://res.vmallres.com/pimages//product/6901443264780/group//78_78_1539243954172.png,https://res.vmallres.com/pimages//product/6901443264780/group//78_78_1539243959093.png', 'HUAWEI Mate 20 RS 保时捷设计', 'HUAWEI Mate 20 RS 保时捷设计 8GB+512GB 全网通版（玄黑）', 'list');
INSERT INTO `product` VALUES ('3', 'HUAWEI nova 4', '2799', 'https://res.vmallres.com/pimages//product/6901443278176/78_78_1544693959065mp.png', '限量赠礼 6期免息 ', 'HUAWEI nova 4  4800万超广角三摄 自拍极点全面屏 高配 8GB+128GB 全网通版（蜜语红·星耀版）', 'list');
INSERT INTO `product` VALUES ('2', '荣耀20 PRO', '3199', 'https://res0.vmallres.com/pimages//product/6901443315338/428_428_1559306427457mp.png', '购机享多重豪礼 ', '荣耀20 PRO DXO全球第二高分 4800万全焦段AI四摄 双光学防抖 麒麟980全网通版8GB+128GB 幻夜星河', 'list');
INSERT INTO `product` VALUES ('4', '荣耀Magic2', '2499', 'https://res.vmallres.com/pimages//product/6901443269723/78_78_1540895297253mp.png', '最高优惠1700元 ', '荣耀Magic2 魔法全视屏 麒麟980AI芯片 屏内指纹 超广角AI三摄 全网通 6GB+128GB 渐变黑', 'list');
INSERT INTO `product` VALUES ('5', 'HUAWEI Mate 20 X', '4499', 'https://res0.vmallres.com/pimages//product/6901443262182/428_428_1542769704670mp.png', '赠好礼|6期免息 ', 'HUAWEI Mate 20 X 6GB+128GB 全网通版（宝石蓝）', 'list');
INSERT INTO `product` VALUES ('6', '荣耀畅玩8A', '799', 'https://res0.vmallres.com/pimages//product/6901443277735/428_428_1546504342739mp.png', '标配版到手价749 ', '华为畅享 9S 2400万超广角AI三摄 4G+128G 全网通版（极光蓝）', 'list');
INSERT INTO `product` VALUES ('7', '荣耀畅玩7', '599', 'https://res0.vmallres.com/pimages//product/6901443229857/428_428_1539912870678mp.png', '下单立减50元 ', '荣耀畅玩7 全网通版 2GB+16GB（黑色）', 'list');
INSERT INTO `product` VALUES ('8', '华为畅享 8e 青春', '599', 'https://res0.vmallres.com/pimages//product/6901443229918/428_428_1540629967045mp.png', '直降220 ', '华为畅享 8e 青春 高清全面屏 2GB+32GB 全网通版（黑色）', 'list');
INSERT INTO `product` VALUES ('9', '华为麦芒8', '1899', 'https://res0.vmallres.com/pimages//product/6901443315307/428_428_1559035092483mp.png', '2400万超广角AI三摄 ', '华为麦芒8 6G+128G 全网通版（宝石蓝）', 'list');
INSERT INTO `product` VALUES ('10', '荣耀Play', '1999', 'https://res0.vmallres.com/pimages//product/6901443258536/428_428_1553510325602mp.png', '尊享版到手1799 ', '荣耀Play 全网通 6GB+128GB 极光蓝 GT游戏加速 AI芯片 全面屏游戏手机 双卡双待', 'list');
INSERT INTO `product` VALUES ('21', '荣耀Play', '7999', 'https://res0.vmallres.com/pimages//product/6901443258536/428_428_1553510325602mp.png', '尊享版到手1799 ', '荣耀Play 全网通 6GB+128GB 极光蓝 GT游戏加速 AI芯片 全面屏游戏手机 双卡双待', 'dn');
INSERT INTO `product` VALUES ('22', '荣耀MagicBook 2019 锐龙版', '3999', 'https://res1.vmallres.com/pimages//product/6901443298204/428_428_1554717601507mp.png', '新品享3期免息 ', '【新品】荣耀MagicBook 2019 锐龙版 14英寸轻薄笔记本电脑 Ryzen 5 3500U 8GB 256GB（冰河银）', 'dn');
INSERT INTO `product` VALUES ('23', 'HUAWEI MateBook 13', '5699', 'https://res1.vmallres.com/pimages//product/6901443304400/428_428_1556179745736mp.png', '现货速发  享3期免息 ', '（华为）HUAWEI MateBook 13（深空灰 i5 8GB 512GB 独显）2K全面屏轻薄性能笔记本 手机电脑一碰即传', 'dn');
INSERT INTO `product` VALUES ('24', '荣耀MagicBook', '4699', 'https://res1.vmallres.com/pimages//product/6901443233182/428_428_1538989301892mp.png', '12小时长续航 ', '荣耀MagicBook 14英寸轻薄笔记本电脑 i5-8250U 8GB 256GB 独显（冰河银）', 'dn');
INSERT INTO `product` VALUES ('25', 'HUAWEI MateBook E 2019款', '3999', 'https://res1.vmallres.com/pimages//product/6901443297771/428_428_1555904746689mp.png', '现货速发  享3期免息 ', '（华为）HUAWEI MateBook E 2019款 12英寸（钛金灰 高通 850 8GB 256GB）全连接轻薄二合一笔记本  2K触摸屏 手机电脑一碰即传', 'dn');
INSERT INTO `product` VALUES ('16', '荣耀MagicBook 锐龙版', '3999', 'https://res1.vmallres.com/pimages//product/6901443263400/428_428_1538989254229mp.png', '轻薄时尚长续航 ', '荣耀MagicBook 锐龙版 14英寸轻薄笔记本电脑 Ryzen 5 2500U 8GB 512GB（冰河银）', 'dn');
INSERT INTO `product` VALUES ('17', 'HUAWEI MateBook X Pro', '7999', 'https://res1.vmallres.com/pimages//product/6901443297962/428_428_1555752016264mp.png', '2019 款   享3期免息 ', '（华为）HUAWEI MateBook X Pro 2019款 13.9英寸（i5 8GB 512GB 集显 深空灰）3K触控全面屏 轻薄笔记本 手机电脑一碰即传', 'dn');
INSERT INTO `product` VALUES ('18', 'HUAWEI MateBook D', '5188', 'https://res1.vmallres.com/pimages//product/6901443211388/428_428_1542768446389mp.png', '限量赠配件礼包+3期免息 ', '（华为）HUAWEI MateBook D 2018款 15.6英寸（皓月银 I5 8GB 256GB）轻薄笔记本 金属一体化机身 杜比全景声音响', 'dn');
INSERT INTO `product` VALUES ('19', 'HUAWEI MateBook 14', '5999', 'https://res1.vmallres.com/pimages//product/6901443292417/428_428_1555751874478mp.png', '享3期免息 ', '（华为）HUAWEI MateBook 14（i5 8GB 512GB 独显 深空灰）2K全面屏轻薄性能笔记本 手机电脑一碰即传', 'dn');
INSERT INTO `product` VALUES ('20', 'HUAWEI MateBook X Pro', '7988', 'https://res1.vmallres.com/pimages//product/6901443227792/428_428_1539915415114mp.png', '3K高清全面屏 ', '（华为）HUAWEI MateBook X Pro 13.9英寸笔记本电脑 深空灰 i5 8GB 256GB 集显', 'dn');
INSERT INTO `product` VALUES ('11', '荣耀畅玩8A', '799', 'https://res0.vmallres.com/pimages//product/6901443277735/428_428_1546504342739mp.png', '标配版到手价749 ', '荣耀畅玩8A 6.09英寸珍珠全面屏 震撼大音量 标配版 全网通 3GB+32GB（幻夜黑）', 'list');
INSERT INTO `product` VALUES ('12', 'HUAWEI nova 4e', '1999', 'https://res0.vmallres.com/pimages//product/6901443292189/428_428_1552440582581mp.png', '限量赠移动电源 ', 'HUAWEI nova 4e 3200万立体美颜 AI超广角三摄 6GB+128GB 全网通版（雀翎蓝）', 'list');
INSERT INTO `product` VALUES ('13', '荣耀8X Max', '1399', 'https://res0.vmallres.com/pimages//product/6901443258574/428_428_1550885810815mp.png', '最高优惠400 ', '荣耀8X Max 骁龙660 7.12英寸高屏占比珍珠屏 5000mAh大电池 全网通 6GB+64GB（魅海蓝）', 'list');
INSERT INTO `product` VALUES ('14', '华为畅享 9e', '799', 'https://res0.vmallres.com/pimages//product/6901443289998/428_428_1553486430599mp.png', '领券减50+赠耳机 ', '华为畅享 9e 千元珍珠屏 3GB+32GB 全网通标配版（幻夜黑）', 'list');
INSERT INTO `product` VALUES ('15', '荣耀Note10', '1899', 'https://res0.vmallres.com/pimages//product/6901443253975/428_428_1542765208952mp.png', '最高优惠900元 ', '荣耀Note10 全网通 6GB+64GB 幻影蓝 AMOLED全面屏手机 AI智能 GT游戏加速 双卡双待 长续航', 'list');
