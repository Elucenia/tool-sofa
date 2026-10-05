<!-- ELUCENIA technical documentation · sofa · zh · no clinical/professional/rights approval -->

# SOFA 评分

[条件、来源与许可](https://elucenia.org/zh/tools/sofa)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### PaO₂

`pao2`

mmHg · 范围: 20–700

### FiO₂

`fio2`

% · 范围: 21–100

### 是否接受机械通气或通气支持？

`suporte`

- `0` — 否
- `1` — 是

### 血小板

`plaq`

×10³/µL · 范围: 1–1500

### 总胆红素

`bili`

mg/dL · 范围: 0.1–50

### 心血管（剂量 mcg/kg/min，持续 ≥ 1 h）

`cv`

- `0` — 平均动脉压≥70 mmHg，无血管加压药
- `1` — 平均动脉压\<70 mmHg
- `2` — 多巴胺≤5或多巴酚丁胺（任意剂量）
- `3` — 多巴胺\>5、肾上腺素≤0.1或去甲肾上腺素≤0.1
- `4` — 多巴胺\>15、肾上腺素\>0.1或去甲肾上腺素\>0.1

### 格拉斯哥昏迷评分

`gcs`

范围: 3–15

### 肌酐

`cr`

mg/dL · 范围: 0.1–20

### 24 h 尿量

`diurese`

mL/天 · 选填 · 范围: 0–10000

## 方法版本

SOFA/Vincent 1996：6系统各0–4，总分0–24；经典阈值；不含SOFA 2

## 已记录的公式

每个系统计0至4分；总分0至24。

呼吸 (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 伴通气支持 = 3; \< 100 伴支持 = 4.

凝血 (血小板 ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

肝脏 (胆红素, mg/dL): \< 1.2 = 0; 1.2–1.9 = 1; 2.0–5.9 = 2; 6.0–11.9 = 3; ≥ 12 = 4.

心血管 (血管活性药物剂量以 µg/kg/min 表示，给药至少 1 小时): 平均动脉压 ≥ 70 = 0; 平均动脉压 \< 70 = 1; 多巴胺 ≤ 5 或多巴酚丁胺 = 2; 多巴胺 \> 5, 肾上腺素或去甲肾上腺素 ≤ 0.1 = 3; 多巴胺 \> 15, 肾上腺素或去甲肾上腺素 \> 0.1 = 4.

神经 (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

肾脏 (肌酐, mg/dL, 或尿量): \< 1.2 = 0; 1.2–1.9 = 1; 2.0–3.4 = 2; 3.5–4.9 或尿量 \< 500 mL/日 = 3; ≥ 5.0 或尿量 \< 200 mL/日 = 4.

## 限制与适用人群

经典SOFA描述危重成年人的器官功能障碍；请记录评估时间和既往器官功能。在2016年Sepsis-3定义中，至少增加2分的急性变化必须由感染引起；仅在无已知既往器官功能障碍时，才能假定基线为零。单独的总分不能诊断感染，也不能提供个人死亡概率。不要将经典分类直接用于儿童。血管活性药物剂量以µg/kg/min表示，给药持续至少1小时；尿量指24小时尿量。 Sepsis-3（2016）表1改编自Vincent 1996，印为胆红素\>12.0 mg/dL、肌酐\>5.0 mg/dL，以及多巴胺\<5或5.1–15 µg/kg/min。本次审查未取得1996年的完整表格。这些边界的差异和空缺尚未裁定；数值核对仅使用无歧义数值和已选定的心血管评分。

## 参考文献

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
