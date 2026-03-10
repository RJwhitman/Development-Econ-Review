// ========== DATA ==========

const flashcards = [
  // T1
  {t:1, q:"What is the modern (revised) motivating question of development economics?", a:"\"What is the source of the diverse set of economic and social conditions that determine the wellbeing of individuals around the globe?\" This replaces the paternalistic \"Why are some countries poor?\" framing, recognising that Western development is the unusual outcome, not the universal norm."},
  {t:1, q:"What are the five themes of development economics?", a:"(1) Geographic — applying economics to LMICs. (2) Non-Western — understanding institutions, social norms, family structures not found in HICs. (3) Macro/Growth — differences in performance across countries and over time. (4) Poverty — why are some people poor? (5) Policy orientation — motivated by desire to change outcomes."},
  {t:1, q:"What is the approximate income ratio between rich and poor countries today vs at the start of industrialisation?", a:"At the start of industrialisation: roughly 1:3. Today: roughly 1:100. LICs have fallen further behind in relative terms, even as absolute living standards have risen."},

  // T2
  {t:2, q:"What is the key difference between the traditional and modern views of development?", a:"Traditional view: focused almost exclusively on per capita GDP/GNI — get the macro right and all benefit. Modern view: GDP is still crucial but insufficient — must also track unemployment, inequality, poverty headcount, and human capital. The modern approach is multidimensional."},
  {t:2, q:"Summarise the three levels of Sen's Capability Approach.", a:"Access → Functioning → Capability. Access = ability to obtain resources (having a bike). Functioning = ability to use them (being able to ride it). Capability = freedom to choose among multiple functionings. Development means expanding capabilities — i.e., expanding freedom."},
  {t:2, q:"What does the Happiness Index research find about wealth and happiness?", a:"Below ~$15,000 per capita GNI, wealth strongly predicts happiness and there is high variation. Above ~$15,000, the slope flattens — money does much less. Individual happiness is best predicted by: family relationships, financial situation, work, community/friends, health, personal freedom, personal values."},
  {t:2, q:"What were the eight areas of the Millennium Development Goals (MDGs) and when were they adopted?", a:"Adopted by 189 UN members in 2000. Eight areas: (1) Eradicate extreme poverty, (2) Universal primary education, (3) Gender equality, (4) Reduce child mortality, (5) Improve maternal health, (6) Combat HIV/AIDS, (7) Environmental sustainability, (8) Global development partnership. All had measurable targets with a 2015 deadline."},

  // T3
  {t:3, q:"What are the three goals of a development measure and why are they nested?", a:"(1) Describe current conditions (accurate, representative). (2) Intertemporal comparison (same thing measured at different times — requires deflation). (3) Cross-country comparison (same thing measured in different countries — requires currency conversion and PPP). Nested because you must accurately describe current conditions before intertemporal comparisons are valid, which are needed before cross-country comparisons are valid."},
  {t:3, q:"What is PPP and why is it needed for cross-country comparisons?", a:"Purchasing Power Parity: adjusts currencies so that a common basket of goods costs the same everywhere. Needed because exchange rates don't reflect real purchasing power — a haircut costs far less in Vietnam than the US, so raw USD conversions overstate poverty in low-wage countries. PPP adjustment involves identifying a standard basket, pricing it in each country, then converting."},
  {t:3, q:"Write the HDI formula and explain why the new (2010) version uses a geometric mean.", a:"$\\text{HDI} = (I_{\\text{Life}} \\times I_{\\text{Edu}} \\times I_{\\text{Income}})^{1/3}$. Each sub-index: $I = (\\text{actual} - \\min)/(\\max - \\min)$. The geometric mean penalises imbalance (AM-GM inequality: arithmetic mean ≥ geometric mean, equality only when all equal). A country can't compensate a terrible health score with high income — unlike the old arithmetic HDI."},
  {t:3, q:"What are the World Bank income thresholds for LIC, LMC, UMC, and HIC?", a:"LIC ≤ $1,025 | LMC $1,026-$4,035 | UMC $4,036-$12,475 | HIC ≥ $12,476. Based on GNI per capita (PPP-adjusted). The World Bank covers 213 economies with population ≥ 30,000."},

  // T4
  {t:4, q:"List the ten shared characteristics of developing countries.", a:"(1) Low living standards & productivity (2) Low human capital (3) High inequality & poverty (4) High population growth (5) Social fractionalization (6) Large rural populations & fast urbanization (7) Low industrialisation (8) Adverse geography (9) Weak institutions & underdeveloped markets (10) Colonial legacy & external dependence."},
  {t:4, q:"What is the 'reversal of fortune' in colonial history?", a:"Wealthier pre-colonial societies (with better institutions) were often the easiest to exploit — colonisers could leverage existing structures. Post-colonial institutional quality in these areas is therefore often lower than in areas that were poorer before colonisation. This reversed pre-colonial rankings of prosperity."},
  {t:4, q:"What is absolute convergence and what does the evidence show?", a:"Absolute convergence: per capita income levels becoming more similar across all countries. Requires poorer countries to grow faster AND be close enough to catch up. Evidence: does NOT hold globally — the ratio of rich to poor country incomes has grown from 1:3 to 1:100 since industrialisation. Holds within the OECD (rich-country club convergence), not for all LICs."},
  {t:4, q:"What is sectoral convergence and who found evidence for it?", a:"Convergence of specific sectors (not whole economies) across countries. Dani Rodrik found strong evidence of manufacturing sector convergence — productivity in manufacturing converges globally even when overall GDP does not. Explains manufacturing-led growth in China, India, and South America, and why lack of global convergence may reflect small manufacturing sectors in the poorest countries."},

  // T5
  {t:5, q:"State the Harrod-Domar growth equation and define each term.", a:"$$g = \\frac{s}{c} - \\delta$$ where $g$ = growth rate of income, $s$ = savings rate, $c$ = capital-output ratio (ICOR, capital needed per unit of output), $\\delta$ = depreciation rate. Growth rises with savings and falls with higher capital requirements or faster depreciation."},
  {t:5, q:"What is the ICOR and how is it used in development planning?", a:"ICOR (Incremental Capital-Output Ratio) = $c = \\Delta K / \\Delta Y$ — the amount of capital needed to produce one more unit of output. In Harrod-Domar: $c = K/Y$ (assumed constant). Used to calculate required savings/investment: if target growth is $g^*$, required savings rate = $(g^* + \\delta) \\times c$. Savings gaps are then filled by foreign aid or FDI."},
  {t:5, q:"What are Rostow's five stages of growth?", a:"(1) Traditional Society (2) Pre-conditions for Take-off (3) Take-off (4) Drive to Maturity (5) Age of High Mass Consumption. All countries follow the same universal, necessary path. The mechanism is capital accumulation through savings. Criticised for Eurocentrism and treating development as a uniform linear process."},
  {t:5, q:"What is the difference between labour-augmenting and labour-saving technological progress?", a:"Labour-augmenting: increases the marginal product of labour (e.g., education, health improvements). Useful in LICs where labour is abundant — raises wages without displacing workers. Labour-saving: allows capital to substitute for labour, reducing labour needed for a given output. Common in HICs (where labour is expensive) but can worsen inequality in LICs by concentrating returns with capital owners."},

  // T6
  {t:6, q:"What are the key assumptions about the agricultural and manufacturing sectors in the Lewis model?", a:"Agriculture: (1) Large labour surplus → MPL = 0. (2) Wages = average product of labour (food shared equally). (3) No capital investment incentive. Manufacturing: (1) Competitive labour market → wages = MPL. (2) Capital is labour-augmenting. (3) All profits reinvested in capital. Workers can migrate freely between sectors."},
  {t:6, q:"Describe the two-stage migration/investment cycle in the Lewis model.", a:"Stage 1 (Migration): $w_M > w_A$ → workers migrate from agriculture to manufacturing, raising manufacturing labour supply and pushing $w_M$ down. Stage 2 (Production/Investment): Extra labour raises output → profits → capital reinvestment → higher MPL → higher $w_M$ above $w_A$ → triggers next migration. Cycle repeats."},
  {t:6, q:"What is the Lewis turning point and why does it matter?", a:"The point at which agricultural surplus labour is exhausted. After this: further migration raises agricultural wages (MPL > 0 as workers become scarce). Urban wages must rise to attract workers → profits fall → capital accumulation slows. The unlimited labour supply assumption breaks down. Labour markets become fully competitive across sectors."},
  {t:6, q:"What are the two main limitations of the Lewis model?", a:"(1) Agricultural sector: surplus labour is usually seasonal, not permanent; wages are often set by MPL competitively, not by APL; MPK in agriculture is positive. (2) Manufacturing sector: capital need not be labour-augmenting — labour-saving investments shift returns to owners rather than workers; model doesn't explain urban unemployment (which Harris-Todaro addresses). The underlying dynamic still holds if: return to capital is higher in manufacturing, AND capital investments are neutral or labour-augmenting."},

  // T7
  {t:7, q:"What is the Solow Growth Model's aggregate production function?", a:"Aggregate: $Y = K^\\alpha (AL)^{1-\\alpha}$<br>Per capita form: $y = f(k) = Ak^\\alpha$, where $y=Y/L$ and $k=K/L$."},
  {t:7, q:"Write the equation for the change in per capita capital stock in the Solow model.", a:"$$\\Delta k = sf(k) - (\\delta+n)k$$Capital grows if $sf(k) > (\\delta+n)k$; shrinks if $sf(k) < (\\delta+n)k$; stable at $k^*$ where $sf(k^*) = (\\delta+n)k^*$."},
  {t:7, q:"What is k* in the Solow model and why is it stable?", a:"$k^*$ is the equilibrium where $\\Delta k = 0$, i.e. $sf(k^*) = (\\delta+n)k^*$. It is stable because the model pulls capital back toward $k^*$ whenever there are deviations."},
  {t:7, q:"Can increasing the savings rate create sustained long-run growth in the Solow model? Why/why not?", a:"No. A one-time rise in $s$ shifts equilibrium to a higher $k^{*\\prime}$ — a level shift, not sustained growth. $s$ is bounded below 1, and only technological change can continuously raise output."},
  {t:7, q:"What is the Solow Residual and what else is it called?", a:"The portion of long-run growth not explained by capital or labor — attributed to technology. Also called Total Factor Productivity (TFP). It determines about 50% of economic growth."},
  {t:7, q:"Name two key limitations of the Solow model.", a:"(1) Says nothing about the determinants of technological change, which drives ~50% of growth. (2) Empirically, economies take decades to reach equilibrium after savings rate changes — questioning whether equilibrium is ever truly reached."},
  {t:7, q:"What was the Neoclassical Counter-Revolution's policy prescription for developing countries?", a:"Limit government intervention: end price and wage controls, open economies to trade without tariffs or subsidies, and remove currency controls."},

  // T8
  {t:8, q:"What is the difference between endogenous and exogenous variables in a model?", a:"Exogenous variables have values assumed/given by the modeler (e.g., $s$ in Harrod-Domar). Endogenous variables are determined by the model's internal dynamics (e.g., the growth rate of output)."},
  {t:8, q:"Why is the Solow model called an 'exogenous growth model' even though growth is derived within it?", a:"Because long-run growth ultimately depends on technology $A$, which is exogenous — its value is assumed rather than explained inside the model."},
  {t:8, q:"What is the Romer model's aggregate production function?", a:"$$Y = AK^{\\alpha+\\beta}L^{1-\\alpha}$$where $0<\\alpha<1$ and $1-\\alpha > \\beta > 0$. The $K^\\beta$ term captures endogenous spillovers."},
  {t:8, q:"What does the $\\bar{K}^\\beta$ term represent in the firm-level Romer production function?", a:"$\\bar{K}^\\beta$ is the average capital across firms, capturing knowledge spillovers — experience generated by one firm becomes a public good benefiting all firms. This makes technology endogenous."},
  {t:8, q:"State the Romer model's long-run growth equation.", a:"$$g = \\frac{n(1-\\alpha)}{1-\\alpha-\\beta}$$Derived by differentiating $Y$ with respect to time via chain rule and substituting steady-state growth rates."},
  {t:8, q:"What happens to the Romer growth equation if $\\beta = 0$?", a:"If $\\beta=0$: $$g = \\frac{n(1-\\alpha)}{1-\\alpha} = n$$Same result as Solow — per capita income is constant in the long run; no self-sustaining growth without spillovers."},
  {t:8, q:"How do Solow and Romer differ in their predictions about FDI flows?", a:"Solow: FDI flows to poorer countries (scarce capital → high returns). Romer: FDI flows to wealthier countries (increasing returns → returns highest where capital stocks are already large)."},
  {t:8, q:"What does 'learning by doing' mean in the Romer model?", a:"Capital investment by one firm generates knowledge that spills over as a public good to all firms — making technological change an endogenous outcome of investment decisions rather than an external gift."},

  // T9
  {t:9, q:"Define a Nash Equilibrium.", a:"A set of strategies is a Nash Equilibrium if no individual player can improve their payoff by unilaterally deviating, given that all other players stick to their equilibrium strategies."},
  {t:9, q:"How is a Nash Equilibrium different from a Dominant Strategy Equilibrium?", a:"A Dominant Strategy Equilibrium requires each player's strategy to be optimal regardless of others' choices. A NE only requires best response to others' equilibrium play. All DSE are NE, but not vice versa — NE is more general."},
  {t:9, q:"How do the Kerala fish markets illustrate coordination failure?", a:"Without communication, fishermen and buyers converged on bad market equilibria — fish were sometimes discarded. Mobile phones enabled real-time coordination, stabilizing prices and eliminating waste."},
  {t:9, q:"In the multiple equilibria model, what is the Nash Equilibrium condition?", a:"With symmetric players and a best response function $f$, the Nash Equilibrium condition is $Y^* = f(Y^*)$ — each player's best response to the equilibrium action is that same action."},
  {t:9, q:"What is the difference between stable and unstable equilibria in the multiple equilibria model?", a:"Stable equilibria are robust to small deviations (system returns to them). Unstable equilibria: any deviation pushes the system toward a different equilibrium. The model has 2 stable and 1 unstable equilibrium."},

  // T10
  {t:10, q:"What are the three wage scenarios in the Big Push model?", a:"W1 (low wage): all firms modernize independently → HICs. W2 (intermediate): coordination required to modernize → Asian Tigers. W3 (high wage): no firm will ever modernize → trapped LICs."},
  {t:10, q:"What is a poverty trap in the context of the Big Push model?", a:"Countries stuck in the low-wage, low-production Nash Equilibrium. Without external coordination or support, no individual firm has an incentive to break away, so the bad equilibrium self-reinforces."},
  {t:10, q:"Why are only 'all modernize' or 'none modernize' valid Nash equilibria in the Big Push model?", a:"All firms are identical and face the same decision. If firms take different actions, at least one is not playing its best response. Symmetry therefore restricts Nash equilibria to unanimous outcomes."},
  {t:10, q:"State the traditional and modern manufacturing production functions in the Big Push model.", a:"Traditional: $Q_t(L)=L$, $C(Q)=Q$ (competitive, $w_t=1$)<br>Modern: $L = F+cQ$ where $0<c<1$, so $Q_m = \\tfrac{1}{c}L - \\tfrac{1}{c}F$<br>Wage bill: $W_i(Q)=w_i(F+cQ)$"},
  {t:10, q:"What are pecuniary externalities in the Big Push model?", a:"Spillovers from one firm's decisions to another's costs or revenues. When a firm modernizes, it pays higher wages → workers across the economy demand more output → other industries benefit, potentially making their own modernization profitable."},
  {t:10, q:"What solutions does the Big Push model suggest for the W2 coordination problem?", a:"(1) Technological change that lowers coordination costs (like mobile phones in Kerala). (2) Government subsidies targeting high-externality industries. (3) Coordinated international/donor investment to trigger simultaneous modernization."},

  // T11
  {t:11, q:"State the O-Ring production function.", a:"$$F(q_1, \\ldots, q_N) = B\\prod_{i=1}^{N} q_i \\qquad 0 \\le q_i \\le 1$$where $B$ is a scaling constant (usually $B=1$)."},
  {t:11, q:"Why does the O-Ring production function create 'extreme complementarities'?", a:"Because output is the product of all input qualities. A single low-quality input drives total output close to zero regardless of the other inputs — 'one bad apple spoils the bunch.'"},
  {t:11, q:"What is assortative matching and why does O-Ring production cause it?", a:"Assortative matching = grouping like-quality inputs together. It arises because the marginal product of a high-quality input is higher in a high-quality firm, so high-quality firms always outbid low-quality firms for top inputs."},
  {t:11, q:"Prove that assortative matching dominates heterogeneous matching.", a:"Assortative output: $q_l^2 + q_h^2$. Heterogeneous output: $2q_l q_h$.<br>Since $q_h > q_l$: $(q_h-q_l)^2 > 0 \\Rightarrow q_h^2 - 2q_h q_l + q_l^2 > 0 \\Rightarrow q_l^2 + q_h^2 > 2q_l q_h$ ✓"},
  {t:11, q:"What two conditions are necessary for O-Ring type dynamics?", a:"(1) Inputs must be sufficiently imperfect substitutes (wide quality range so $q_H \\gg q_L$). (2) Production must be sufficiently complementary — the marginal product of one input must depend significantly on the quality of the others."},
  {t:11, q:"What are the key implications of O-Ring theory for development?", a:"Firms hire workers of similar skill (assortative matching). Same task earns more in high-skill firms → explains extreme income inequality. Creates poverty traps: poor environments cannot attract high-quality inputs, keeping production low."},

  // T12
  {t:12, q:"What are the three stages of the demographic transition?", a:"Stage 1: Both birth and death rates high → low population growth. Stage 2: Death rates fall first → rapid population growth. Stage 3: Birth rates fall too → population stabilizes."},
  {t:12, q:"What is the 'hidden momentum of population growth'?", a:"Even as TFR falls, countries with a wide-base pyramid (many people in reproductive ages) keep growing because the large cohort size means total births remain high — building momentum into future population growth."},
  {t:12, q:"What is the dependency ratio and why does it matter for development?", a:"Ratio of youth (0-14) + elderly (65+) to working-age (15-64) population. A high dependency ratio means fewer workers support more dependents, constraining savings, investment, and public resource availability."},
  {t:12, q:"What is the consensus view on population growth and development?", a:"Population growth is not the primary cause of poverty. Low resources reflect poverty, not overpopulation. However, rapid population growth or extreme density can hinder development by stressing capital and public services."},
  {t:12, q:"How does population growth enter the Solow model and what is its effect?", a:"It appears as $n$ in $\\Delta k = sf(k) - (\\delta+n)k$, acting like depreciation: the same capital stock must now serve more people, diluting per capita capital. Higher $n$ requires higher $s$ just to maintain $k^*$."},
  {t:12, q:"What are the key claims and empirical flaws of the Malthusian Poverty Trap?", a:"Malthus (1798) claimed population grows geometrically while food grows arithmetically → eventual catastrophe. Flaws: it is not a formal model (no agents or incentives) and it fails empirically — technological progress has consistently expanded resources to accommodate population."},

  // T13
  {t:13, q:"What is the Kuznets Curve and has it held empirically?", a:"An inverted-U relationship: as development proceeds, inequality first worsens then improves. Kuznets's original finding (1950s) was driven largely by Latin American data. More recent evidence shows many countries (Taiwan, South Korea, Costa Rica) developed <em>without</em> worsening inequality first — the curve is no longer considered a universal law."},
  {t:13, q:"Why does extreme inequality cause economic inefficiency?", a:"Three channels: (1) The relative poor cannot access credit → underinvestment in education, health, and business. (2) Lower national savings — highest savers are the middle class. (3) Capital flight — the wealthy spend heavily on imported luxury goods, reducing domestic investment."},
  {t:13, q:"What is Rawls's Veil of Ignorance argument for equality?", a:"Imagine choosing a country's income distribution before being born, not knowing which family you'll be assigned. Behind this 'veil,' most people prefer more equal distributions than those observed in most developing countries — providing a fairness argument for redistribution even without efficiency gains."},
  {t:13, q:"Define the Kuznets Ratio and give its formula.", a:"$$\\text{Kuznets Ratio} = \\frac{\\text{Income share of top 20\\%}}{\\text{Income share of bottom 40\\%}}$$ Higher = more unequal. Perfect equality → ratio = 0.5. Perfect inequality → ratio → ∞. Example: top 20% = 50%, bottom 40% = 14% → KR = 3.57."},
  {t:13, q:"What is the Lorenz Curve and how is the Gini Coefficient derived from it?", a:"The Lorenz curve plots cumulative population share (x, ordered by income) vs cumulative income share (y). The Gini coefficient = area between the 45° line of equality and the Lorenz curve, divided by the total triangle area (= 0.5). So $G = 2A$ where $A$ = the gap area. $G=0$ = perfect equality; $G=1$ = perfect inequality."},
  {t:13, q:"What is the Transfer Principle and which measure fails it?", a:"Transfer Principle: transferring income from a richer to a poorer person (without reversing their rank) must reduce measured inequality. The <strong>Kuznets Ratio fails</strong> this — transfers within an income group (e.g., from the 2nd quintile to the 1st) change no group aggregate and thus leave the ratio unchanged. The Gini satisfies it."},

  // T14
  {t:14, q:"What is a poverty line and how are nutrition-based lines calculated?", a:"A threshold income $Y_p$ — families below are classified as poor. Nutrition-based method (Engel's Law): (1) estimate the income-food-share relationship, (2) calculate the cost of a minimum caloric basket, (3) find the income level at which families can afford it. The UN uses 2,000 cal/day; the US uses the USDA Thrifty Food Plan."},
  {t:14, q:"Give the formula for the Headcount Statistic ($H$) and Headcount Index ($HI$).", a:"$$H = \\sum_{i=1}^{N} \\mathbf{1}_{[Y_i < Y_p]}\\qquad HI = \\frac{H}{N}$$Limitation: $HI$ is insensitive to the <em>depth</em> of poverty — lifting someone just below the line counts the same as lifting someone in extreme destitution."},
  {t:14, q:"What are the five poverty gap measures and how do they relate to the TPG?", a:"$$TPG = \\sum_{i=1}^H (Y_p - Y_i)$$Then: $APG = TPG/N$ (all pop.), $NPG = APG/Y_p$, $AIS = TPG/H$ (poor only), $NIS = AIS/Y_p$. APG and NPG average over everyone; AIS and NIS average only over the poor."},
  {t:14, q:"What is the Foster-Greer-Thorbecke (FGT) Index and what does each $\\alpha$ value give?", a:"$$P_\\alpha = \\frac{1}{N}\\sum_{i=1}^{H}\\left(\\frac{Y_p-Y_i}{Y_p}\\right)^\\alpha$$• $P_0 = HI$ (Headcount Index) • $P_1 = NPG$ (Normalized Poverty Gap) • $P_2$ = Squared Poverty Gap (used by World Bank) — weights the poorest most, incorporating inequality among the poor via $CV_P^2$."},
  {t:14, q:"Distinguish the chronically poor, economically vulnerable, and ultra-poor.", a:"<strong>Economically vulnerable:</strong> at high risk — move back and forth across the poverty line year to year. <strong>Chronically poor:</strong> consistently below the line (≈ 1/3 of the poor). <strong>Ultra-poor:</strong> extremely low incomes with severe deprivation; in 2007 ≈162M people lived on less than 54¢/day. Each group typically requires different and more targeted interventions."},

  // T15
  {t:15, q:"Why do different inequality measures sometimes rank countries differently?", a:"Because some cross-country comparisons are inherently ambiguous. The key case is <strong>crossing Lorenz curves</strong>: Country A's Lorenz curve is closer to equality in the bottom half, Country B's in the top half — no measure can unambiguously say which is more equal. Different measures resolve this ambiguity differently based on which part of the distribution they weight."},
  {t:15, q:"What four properties are used to evaluate inequality measures, and which does the Kuznets Ratio fail?", a:"(1) Anonymity — only the distribution matters, not who holds it. (2) Scale Independence — doubling all incomes doesn't change inequality. (3) Population Independence — doubling the population doesn't change inequality. (4) Transfer Principle — a transfer from rich to poor reduces inequality. <strong>Kuznets Ratio fails only the Transfer Principle</strong> (within-group transfers are invisible). Gini satisfies all four."},
  {t:15, q:"What four properties are used to evaluate poverty measures, and which does each standard measure satisfy?", a:"Anonymity, Population Independence, Monotonicity (giving income to a poor person reduces poverty), Distributional Sensitivity (shifting income from poor to less-poor raises poverty). Summary: $H$ — only Anonymity. $HI$ — Anonymity + Pop. Indep. $TPG$ — Anonymity + Monotonicity. $APG$ — Anonymity + Pop. Indep. + Monotonicity. Only $P_2$ (FGT) satisfies all four."},
  {t:15, q:"What is the Multidimensional Poverty Index (MPI)?", a:"The UNDP's MPI measures well-being along three dimensions — health, education, and standard of living — at the household level. Health includes child mortality and malnutrition; education includes years of schooling and enrollment; living standards include cooking fuel, sanitation, water, electricity, and assets. It is analogous to the HDI but measured at the individual/household level, not country level."},

  // T16
  {t:16, q:"What are the two key features distinguishing Harris-Todaro from Lewis?", a:"(1) Manufacturing wages are fixed <em>above</em> equilibrium (e.g., by minimum wage), creating urban unemployment. (2) Firms hire from the pool of urban residents — migrants move without a job guarantee. In Lewis, workers can instantly switch sectors; in Harris-Todaro, migration is risky and unemployment is an equilibrium phenomenon."},
  {t:16, q:"Write the Harris-Todaro equilibrium condition and explain each term.", a:"$$W_A = \\frac{L_M}{L_{US}}\\bar{W}_M$$where $W_A$ = agricultural wage, $\\bar{W}_M$ = fixed manufacturing wage, $L_M$ = manufacturing jobs (fixed), $L_{US}$ = total urban labor supply. The probability of getting hired = $L_M/L_{US}$. Migration continues until the expected urban wage equals the certain agricultural wage."},
  {t:16, q:"Solve for equilibrium urban unemployment in the Harris-Todaro model.", a:"From $W_A = (L_M/L_{US})\\bar{W}_M$: $$L_{US}^* = \\frac{L_M \\bar{W}_M}{W_A}$$ Unemployment: $$L_{\\text{unemp}}^* = L_{US}^* - L_M = L_M\\frac{\\bar{W}_M - W_A}{W_A}$$ Unemployment rate: $$u^* = 1 - \\frac{W_A}{\\bar{W}_M}$$"},
  {t:16, q:"State the three counter-intuitive implications of Harris-Todaro.", a:"(1) Raising the manufacturing wage increases unemployment — higher $\\bar{W}_M$ attracts more migrants until the expected wage falls back to $W_A$. (2) Creating more manufacturing jobs can increase unemployment — more jobs raise the probability of employment, inducing more migration than new jobs created. (3) Rural education can backfire — better-trained rural workers have stronger incentives to migrate, swelling the urban unemployment pool."},

  // T17
  {t:17, q:"What are agglomeration economies and what are their two main types?", a:"Cost reductions generated by firms and workers co-locating. <strong>Localization economies:</strong> industry-specific advantages — lower input transport costs, specialized local suppliers (e.g., auto-parts around Detroit). <strong>Urbanization economies:</strong> general city advantages — social capital, thick labor markets, shared infrastructure, knowledge spillovers. Together they explain why cities form and grow."},
  {t:17, q:"What causes urban giantism in developing countries and why is it a paradox?", a:"The paradox: primate cities in LICs are often disproportionately large despite low average incomes. Three causes: (1) <strong>First-city bias</strong> — self-reinforcing dominance. (2) <strong>Protectionism</strong> — without trade, production locates near the largest domestic consumer market. (3) <strong>Political economy</strong> — dictators concentrate resources in capital cities to prevent unrest; countries with unstable autocratic regimes have systematically larger capital cities."},
  {t:17, q:"How does the UN define a slum, and why do slums exist in LICs but not HICs?", a:"UN: a household lacking at least one of (1) durable housing, (2) sufficient space (≤3/room), (3) safe water, (4) adequate sanitation, (5) security of tenure. Slums exist because: the poor cannot afford code-compliant housing; HICs enforce building codes (effectively mandating a quality floor); LICs lack institutional capacity and have far more individuals who cannot afford minimum housing, making slums large enough to become important political constituencies."},
  {t:17, q:"What share of urban workers are in the informal sector in LICs, and what are its main problems?", a:"30-70% of urban employment. Problems: no regulation → environmental harm and safety issues; no benefits for workers; encourages slum development; women are disproportionately concentrated here with less access to formal sector jobs. Positives: generates employment without state support; labor-intensive (good when capital is scarce); provides low-cost training and active recycling."},

  // T18
  {t:18, q:"What are the four criteria for perfect property rights, and which failure causes most environmental problems?", a:"(1) Universality — all resources privately owned. (2) Excludability — owner can prevent others from using the resource. (3) Transferability — ownership can be bought/sold. (4) Enforceability — contracts enforceable. Most environmental problems stem from a failure of <strong>excludability</strong> — when owners cannot charge for use of a resource, it gets overexploited."},
  {t:18, q:"Explain the Tragedy of the Commons model and its key result.", a:"A rivalrous, non-excludable resource (e.g., a fishery). Without excludability: fishermen enter until <em>average product</em> = wage. With an owner: only employs workers until <em>marginal product</em> = wage. Since $AP > MP$ for any concave production function, open access attracts too many workers: $L_C > L^*$. Result: over-exploitation and welfare loss relative to the Pareto optimum."},
  {t:18, q:"What is a public good, and what is the free rider problem?", a:"A public good is non-rivalrous (use by one doesn't reduce availability to others) AND non-excludable (no one can be prevented from enjoying it). Examples: clean air, national defense, lighthouses. Free rider problem: since no one can be excluded, rational individuals prefer to let others pay while enjoying the good for free → private provision leads to <em>under-provision</em> relative to the social optimum."},
  {t:18, q:"How does aggregate demand differ between rivalrous and non-rivalrous goods?", a:"<strong>Rivalrous:</strong> Each unit can only be consumed by one person → aggregate demand = <em>horizontal</em> sum of individual demands (at each price, add up quantities). <strong>Non-rivalrous:</strong> Everyone consumes the same unit simultaneously → aggregate demand = <em>vertical</em> sum (at each quantity, add up willingness-to-pay). Social optimum: $\\sum_i MB_i = MC$."},

  // EXAMPLES (new)
  {t:13, q:"[Example] Quintile shares: Q1=4%, Q2=8%, Q3=14%, Q4=24%, Q5=50%. Calculate the Kuznets Ratio.", a:"Bottom 40% = Q1 + Q2 = 4 + 8 = 12%. Top 20% = Q5 = 50%. $$KR = \\frac{50}{12} \\approx 4.17$$ Interpretation: The richest quintile has 4.17× the income of the entire bottom 40% combined — a relatively high level of inequality (e.g., typical of a high-inequality LIC)."},
  {t:14, q:"[Example] Incomes = {1, 2, 3, 7, 9}, $Y_p = 4$. Calculate $H$, $HI$, $TPG$, $APG$, and $P_2$.", a:"$H=3$, $HI=0.6$. Shortfalls: $3-1=2$, $3-2=1$... wait — $Y_p=4$: shortfalls = $4-1=3$, $4-2=2$, $4-3=1$. $TPG=6$. $APG=6/5=1.2$. $NIS=AIS/Y_p=(6/3)/4=0.5$. $$P_2 = \\frac{1}{5}\\left[\\left(\\frac{3}{4}\\right)^2+\\left(\\frac{2}{4}\\right)^2+\\left(\\frac{1}{4}\\right)^2\\right] = \\frac{0.5625+0.25+0.0625}{5} = \\frac{0.875}{5} = 0.175$$"},
  {t:16, q:"[Example] $\\bar{W}_M=4$, $W_A=1$, $L_M=20$. Find $L_{US}^*$ and the unemployment rate.", a:"$$L_{US}^* = \\frac{L_M \\bar{W}_M}{W_A} = \\frac{20 \\times 4}{1} = 80$$ Unemployment = $80 - 20 = 60$ workers. $$u^* = 1 - \\frac{W_A}{\\bar{W}_M} = 1 - \\frac{1}{4} = 75\\%$$ A very high unemployment rate — the extremely elevated wage relative to the agricultural sector attracts massive in-migration, most of whom end up unemployed."},
  {t:18, q:"[Example] Fishery: $f(L) = 8\\sqrt{L}$, wage $w=2$. Find $L^*$ and $L_C$.", a:"$MP_L = 4/\\sqrt{L}$. Owner: $4/\\sqrt{L^*}=2 \\Rightarrow L^*=4$. $AP_L=8/\\sqrt{L}$. Open access: $8/\\sqrt{L_C}=2 \\Rightarrow L_C=16$. Over-use factor = $16/4 = 4\\times$. Output: $f(4)=16$ vs $f(16)=32$. Despite higher output, total wages $= 16 \\times 2 = 32$ = all revenue — zero net surplus. The commons generates no rent."},

  // PROOFS (new)
  {t:13, q:"[Proof] Show the continuous Gini formula is $G = 1 - 2\\int_0^1 L(x)\\,dx$.", a:"Triangle area $= \\int_0^1 x\\,dx = 0.5$. Area under Lorenz curve $B = \\int_0^1 L(x)\\,dx$. Gap $A = 0.5 - B$. $G = A/0.5 = 2A = 2(0.5-B) = 1 - 2\\int_0^1 L(x)\\,dx$. ✓ If $L(x)=x$ (equality): $G = 1 - 2 \\times 0.5 = 0$. If $L(x)=0$ except $L(1)=1$ (max inequality): $G = 1 - 0 = 1$."},
  {t:15, q:"[Proof] Prove the Kuznets Ratio fails the Transfer Principle with a numerical counterexample.", a:"Three groups: Top 20% = 40, Second 20% = 10, Bottom 20% = 10. KR = 40/(10+10) = 2. Now transfer $1 from Second (richer) to Bottom (poorer) within the bottom 40%: Top = 40, Second = 9, Bottom = 11. New KR = 40/(9+11) = 40/20 = 2. <strong>Unchanged</strong> despite a pro-equality transfer. The KR only sees group totals, not within-group distribution."},
  {t:18, q:"[Proof] Show $L_C > L^*$ for any concave production function.", a:"For concave $f$ (i.e. $f''>0$... wait, $f''<0$): By the mean value theorem, $AP_L = f(L)/L = f'(\\xi)$ for some $\\xi \\in (0,L)$. Since $f'' < 0$, $f'$ is decreasing, so $f'(\\xi) > f'(L)$ for $\\xi < L$. Therefore $AP_L > MP_L$ for all $L > 0$. Owner sets $MP_L(L^*)=w$, so $AP_L(L^*)>w$ → open access firms can still profit → keep entering until $AP_L(L_C)=w$ with $L_C > L^*$. ∎"},

  // EXAMPLES
  {t:7, q:"[Example] With $\\alpha=0.5$, $s=0.3$, $\\delta=0.05$, $n=0.02$, what is the equilibrium $k^*$?", a:"Set $sf(k^*) = (\\delta+n)k^*$: $0.3(k^*)^{0.5} = 0.07 k^*$. Divide by $(k^*)^{0.5}$: $0.3/0.07 = (k^*)^{0.5}$. Square: $$k^* = \\left(\\frac{0.3}{0.07}\\right)^2 \\approx 18.4$$"},
  {t:7, q:"[Example] If $s$ rises from 0.3 to 0.4 (all else same, $\\delta=0.05$, $n=0.02$, $\\alpha=0.5$), what happens to $k^*$?", a:"New $k^{*\\prime} = (0.4/0.07)^2 \\approx 32.7$, up from 18.4. This is a one-time level shift to a higher equilibrium — output rises permanently, but the <em>growth rate</em> returns to zero. Capital does not keep growing indefinitely."},
  {t:8, q:"[Example] With $\\alpha=0.5$, $\\beta=0.2$, $n=0.03$, calculate $g$ and compare to the Solow result.", a:"Romer: $g = \\frac{0.03 \\times 0.5}{1-0.5-0.2} = \\frac{0.015}{0.3} = 5\\%$. Solow ($\\beta=0$): $g = \\frac{0.03 \\times 0.5}{0.5} = 3\\% = n$. Spillovers raise long-run growth by 2 percentage points — per capita income grows at 2% per year indefinitely."},
  {t:9, q:"[Example] In the Prisoner's Dilemma, why is (Confess, Confess) the NE even though (Silent, Silent) gives both players a better payoff?", a:"(Confess, Confess) is a NE because given B confesses, A's best response is also Confess (−6 > −9). Neither player can unilaterally improve by deviating. (Silent, Silent) is better jointly but not stable — each player has an incentive to defect and confess, earning 0 instead of −1."},
  {t:10, q:"[Example] Firm has $F=2$, $c=0.5$, $L/N=10$, $w=1.4$. Is it profitable to modernize if all others also modernize (demand = $Q_2 = 16$)?", a:"Output: $Q_m = 2(10) - 2(2) = 16$. Revenue $= 16$. Wage bill: $W = 1.4(2 + 0.5 \\times 16) = 1.4 \\times 10 = 14$. Profit $= 16 - 14 = +2 > 0$. ✓ Yes — profitable when all others modernize (W2 or W1 scenario)."},
  {t:11, q:"[Example] Four workers: two with $q_H=0.9$, two with $q_L=0.4$, $B=1$. Compare total output under assortative vs heterogeneous matching.", a:"Assortative: $0.9 \\times 0.9 + 0.4 \\times 0.4 = 0.81 + 0.16 = 0.97$. Heterogeneous: $0.9 \\times 0.4 + 0.9 \\times 0.4 = 0.36 + 0.36 = 0.72$. Assortative produces 35% more total output. High-quality firm's marginal product for a second high-skill worker = 0.9 vs 0.4 at the low-quality firm — always outbids."},
  {t:12, q:"[Example] Country has 15M youth, 30M working-age, 5M elderly. Calculate the dependency ratio.", a:"$$\\text{Dependency Ratio} = \\frac{15 + 5}{30} = \\frac{20}{30} \\approx 0.67$$For every 100 workers, 67 dependents. A high ratio (common in high-fertility LICs) strains savings and public services, acting as a drag on capital accumulation per worker."},

  // PROOFS
  {t:7, q:"[Proof] Show that $k^*$ in the Solow model is locally stable using calculus.", a:"Define $\\phi(k) = sf(k)-(\\delta+n)k$. We need $\\phi'(k^*)<0$.<br>$$\\phi'(k) = sf'(k) - (\\delta+n) = s\\alpha A k^{\\alpha-1} - (\\delta+n)$$At $k^*$: $sAk^{*\\alpha-1} = \\delta+n$, so $s\\alpha Ak^{*\\alpha-1} = \\alpha(\\delta+n)$.<br>$$\\phi'(k^*) = \\alpha(\\delta+n)-(\\delta+n) = (\\alpha-1)(\\delta+n)$$Since $0<\\alpha<1$: $(\\alpha-1)<0$ and $(\\delta+n)>0$, so $\\phi'(k^*)<0$. ✓ Stable."},
  {t:7, q:"[Proof] Derive the closed-form expression for $k^*$ in the Solow model.", a:"Set $\\Delta k = 0$: $sAk^\\alpha = (\\delta+n)k$. Divide by $k$: $sAk^{\\alpha-1} = \\delta+n$. Isolate $k$:<br>$$k^{\\alpha-1} = \\frac{\\delta+n}{sA} \\implies \\boxed{k^* = \\left(\\frac{sA}{\\delta+n}\\right)^{\\!\\frac{1}{1-\\alpha}}}$$"},
  {t:8, q:"[Proof] Derive $g = n(1-\\alpha)/(1-\\alpha-\\beta)$ from the Romer model step by step.", a:"Differentiate $Y=AK^{\\alpha+\\beta}L^{1-\\alpha}$ by time (chain rule):<br>$$\\frac{\\dot{Y}}{Y} = (\\alpha+\\beta)\\frac{\\dot{K}}{K} + (1-\\alpha)\\frac{\\dot{L}}{L}$$In steady state $\\dot{Y}/Y = \\dot{K}/K = g$ and $\\dot{L}/L=n$:<br>$$g=(\\alpha+\\beta)g + (1-\\alpha)n$$$$g(1-\\alpha-\\beta)=(1-\\alpha)n \\implies \\boxed{g = \\frac{n(1-\\alpha)}{1-\\alpha-\\beta}}$$"},
  {t:8, q:"[Proof] Why must $\\dot{Y}/Y = \\dot{K}/K$ in Romer steady state?", a:"From $\\dot{K}=sY-\\delta K$ divide by $K$: $\\dot{K}/K = sY/K - \\delta$. For this to be constant, $Y/K$ must be constant. Write $Y=aK$, differentiate: $\\dot{Y}=a\\dot{K}$, divide by $Y=aK$: $\\dot{Y}/Y = \\dot{K}/K$. ✓"},
  {t:9, q:"[Proof] When is a Nash Equilibrium stable vs unstable in the best-response model?", a:"At a NE $Y^*=f(Y^*)$, perturb by $\\varepsilon$. Player 1's response: $f(Y^*+\\varepsilon)\\approx Y^*+f'(Y^*)\\varepsilon$. Deviation shrinks iff $|f'(Y^*)|<1$ → <strong>stable</strong>. Deviation grows iff $|f'(Y^*)|>1$ → <strong>unstable</strong>. Graphically: stable where $f$ cuts the 45° line from above; unstable where $f$ cuts from below."},
  {t:11, q:"[Proof] Show that $\\partial^2 F/\\partial q_i \\partial q_j > 0$ in the O-Ring model.", a:"$F = \\prod_{i=1}^N q_i$. First derivative: $\\partial F/\\partial q_i = \\prod_{j\\neq i} q_j$. Second derivative w.r.t. $q_k$ ($k\\neq i$):<br>$$\\frac{\\partial^2 F}{\\partial q_i\\,\\partial q_k} = \\prod_{j \\neq i,\\,j\\neq k} q_j > 0$$since all $q_j > 0$. The marginal product of each input strictly increases in every other input's quality. ✓"},
  {t:11, q:"[Proof] Prove assortative matching yields strictly higher total output than heterogeneous matching.", a:"Two firms, two workers each: $q_H > q_L > 0$.<br>Assortative: $\\Pi_A = q_H^2 + q_L^2$<br>Heterogeneous: $\\Pi_H = 2q_H q_L$<br>$$\\Pi_A - \\Pi_H = q_H^2 + q_L^2 - 2q_Hq_L = (q_H-q_L)^2 > 0 \\checkmark$$"},
  {t:12, q:"[Proof] Show formally why $n$ and $\\delta$ enter the Solow model symmetrically.", a:"Define $k=K/L$. Quotient rule: $\\dot{k} = \\dot{K}/L - k\\cdot(\\dot{L}/L) = \\dot{K}/L - nk$. Substitute $\\dot{K}=sY-\\delta K$ and divide by $L$:<br>$$\\dot{k} = sf(k) - \\delta k - nk = sf(k)-(\\delta+n)k$$Both $\\delta$ and $n$ erode per capita capital at rate proportional to $k$. ✓"},

  // T19
  {t:19, q:"What are PM10 and PM2.5, and why does PM2.5 cause more health damage?", a:"Both are measures of particulate matter pollution. PM10 = particles under 10 microns; PM2.5 = particles under 2.5 microns. PM2.5 is more dangerous because smaller particles evade the body's natural defenses (cilia, cellular barriers), penetrate deeper into the lungs, enter the bloodstream, and cause systemic cardio-pulmonary inflammation. Composition matters less than size."},
  {t:19, q:"What are the most problematic sources of particulate matter in developing countries?", a:"Industrial combustion, coal-fired electricity generation, burning of crop residue (a huge problem in India), and indoor burning of coal or biomass for cooking and heating. Indoor biomass burning is particularly dangerous — it exposes women and children to extreme PM concentrations daily in unventilated homes (Duflo, Greenstone, Hanna research)."},
  {t:19, q:"Why are LICs uniquely vulnerable to global warming?", a:"(1) High household reliance on farming and fishing — livelihoods directly destroyed by climate shifts. (2) Poor construction quality — buildings cannot withstand stronger storms. (3) Limited disaster response capacity — governments lack resources to react. (4) Fragile political systems that can fracture under resource stress (e.g., Darfur crisis linked to climate-driven drought)."},
  {t:19, q:"What is the key policy constraint for addressing global environmental challenges?", a:"Solutions require coordinated action by BOTH developed AND developing countries. Developed countries are historically responsible for most cumulative emissions; developing countries account for most future growth. This creates a collective action problem — individual country incentives diverge from the global optimum, the same public goods / externality failure that applies to all non-excludable goods."},

  // T20
  {t:20, q:"What does 'Missing Women' mean and who coined the term?", a:"Coined by Nobel laureate Amartya Sen. It refers to the fact that the observed male-to-female ratio in many LICs is much higher than the biological norm, implying that a large number of women are missing due to excess female mortality. This excess mortality occurs through sex-selective abortion, infanticide, differential nutrition and medical access, and high maternal mortality."},
  {t:20, q:"Write the missing women formula and apply it to a birth sex ratio of 1.14.", a:"$$\\frac{f_a}{f_e} = \\frac{r_e}{r_a}$$ where $r_e = 1.06$ (natural birth ratio). At $r_a = 1.14$: $f_a/f_e = 1.06/1.14 \\approx 0.930$. This means 7% of girls who should have been born are missing. The assumption is that the number of actual men equals expected men ($m_a = m_e$)."},
  {t:20, q:"Explain Fischer's Principle in your own words.", a:"At a 1:1 sex ratio, both sexes have equal reproductive probability — equilibrium. If women are more common (ratio < 1), men reproduce more easily, genes for producing boys spread, ratio rises. If men are more common (ratio > 1), women reproduce more easily, genes for producing girls spread, ratio falls. Therefore 1:1 is the unique evolutionarily stable sex ratio. Any sustained deviation implies excess mortality in one sex."},
  {t:20, q:"What did Qian (2008) find about son preference and women's economic status in China?", a:"Maoist reforms promoted tea cultivation in some areas (tea picking favours women's smaller hands) and orchard farming in others (favours men). In tea areas, women earned 10% more income. This raised the fraction of girls surviving to adulthood by 1%. Finding: son preference is driven partly by women's economic status — when women have higher earning potential, the relative value of having a daughter rises and excess female mortality falls."},

  // T21
  {t:21, q:"Why did economists historically underestimate the importance of agriculture for development?", a:"Classic models like the Lewis two-sector model treated agriculture as a passive reserve of surplus labour to fuel manufacturing growth. We now recognise: (1) 2/3 of the world's poorest are in rural areas and must be included in development; (2) urbanisation without agricultural productivity leads to food insecurity; (3) rural-to-urban migration creates problems if agricultural productivity doesn't first rise."},
  {t:21, q:"What are Timmer's four stages of structural transformation?", a:"(1) Agricultural productivity surplus created (via technology and organisation). (2) Surplus transferred to urban sector via investment, taxation, or price controls on food. (3) Progressive integration of agricultural and non-agricultural input, output, and labour markets. (4) Full integration — agriculture becomes just another sector, small share of GDP, highly productive, fully market-integrated."},
  {t:21, q:"What are the three steps of agricultural development and what is the key barrier between them?", a:"(1) Subsistence farming: staple crops, family labour, no surplus, extreme vulnerability to harvest failure. (2) Transition: expand land, add cash crops, better technology, hire labour. (3) Modern commercial farming: profit-maximising, optimal inputs, mechanised, extremely productive. The key barrier between stages is RISK — HYV crops are more sensitive to conditions, and subsistence farmers cannot afford to risk a failed harvest (poverty trap)."},

  // T22
  {t:22, q:"What are the two main reasons why farmers in LICs don't adopt better agricultural technology?", a:"(1) Prevailing farm structures: Latin American farms too large to manage; African farms too small to justify mechanisation. (2) Agricultural poverty trap: higher-yield varieties are riskier (more sensitive to environmental conditions). Farmers near subsistence cannot tolerate the downside risk of crop failure, so they rationally stick with low-yield but safe traditional crops even when better technology exists."},
  {t:22, q:"Why doesn't yield-based crop insurance work well, and what is the alternative?", a:"Yield-based insurance (pays based on crops grown) creates moral hazard — farmers reduce investments in irrigation, fertiliser, etc., knowing they'll be compensated. Rainfall insurance pays based on rainfall characteristics (total seasonal rainfall, dry days), not actual yield. No moral hazard since farmers can't affect rainfall. Challenges: (1) reinsurance — rainfall is regional so risk must be spread across uncorrelated regions; (2) basis risk — need rainfall probability distributions at micro-climate level, often with little historical data."},
  {t:22, q:"What was the Green Revolution, and why did it matter for development?", a:"A 1960s agricultural breakthrough targeting Asia. Key innovations: HYV wheat (Norman Borlaug, Nobel Peace Prize) — stronger stalks, faster maturation (more growing seasons), wider temperature tolerance, pest resistance; and HYV rice. Resulted in dramatic productivity increases across Asia and averted large-scale famine. Expanded to other crops. Limitation: benefits concentrated in Asia, required fertiliser and irrigation (inaccessible to poorest farmers), may have increased within-agricultural inequality."},
  {t:22, q:"[Example] A farmer faces: traditional = yield 10 (certain). HYV = yield 20 (p=0.6) or 3 (p=0.4). With $U = \\ln(y)$, which does a risk-averse farmer choose?", a:"$EU(\\text{HYV}) = 0.6\\ln(20) + 0.4\\ln(3) = 0.6(3.00) + 0.4(1.10) = 1.80 + 0.44 = 2.24$<br>$U(\\text{traditional}) = \\ln(10) = 2.30$<br><strong>Farmer chooses traditional</strong> despite HYV having higher expected yield (13.2 vs 10), because risk aversion makes the 40% chance of catastrophic yield (3 near subsistence min of 5) too costly. This is the agricultural poverty trap — rational, not irrational."},
];

const quizQuestions = [
  // T1
  {t:1, q:"What is the modern motivating question of development economics?",
   opts:["Why are some countries poor?","How can rich countries grow faster?","What explains the diverse economic and social conditions determining wellbeing globally?","How do governments balance growth with equality?"],
   ans:2, exp:"The original 'Why are some countries poor?' framing is now considered paternalistic and Orientalist. The modern question asks what explains the full diversity of conditions globally — treating Western development as one outcome, not the universal benchmark."},
  {t:1, q:"By roughly how much did the income ratio between rich and poor countries change since industrialisation?",
   opts:["Stayed roughly constant at 1:5","Narrowed from 1:10 to 1:3","Widened from about 1:3 to about 1:100","Widened from 1:50 to 1:200"],
   ans:2, exp:"At the start of the Industrial Revolution the ratio was approximately 1:3. Today it is approximately 1:100 — rich and poor countries have diverged dramatically in per capita income terms."},
  {t:1, q:"Which theme of development economics is subject-based rather than geographically-based, and could include the poor in wealthy countries?",
   opts:["Geographic theme","Macro/Growth theme","Non-Western theme","Poverty theme"],
   ans:3, exp:"The Poverty theme asks why some people are poor and why there is income inequality — it applies to poor individuals anywhere, including in high-income countries. The other themes are more geographically focused on LMICs."},

  // T2
  {t:2, q:"In Sen's Capability Approach, which level is defined as the ability to choose among multiple functionings?",
   opts:["Access","Functioning","Capability","Freedom"],
   ans:2, exp:"Capability is the highest level — the freedom to choose among different functionings. Access is about having resources; functioning is about being able to use them; capability is the freedom to choose which uses to pursue."},
  {t:2, q:"The Happiness Index research finds that above approximately what per capita income does additional wealth do much less for happiness?",
   opts:["$2,000","$5,000","$15,000","$50,000"],
   ans:2, exp:"Layard's research shows a clear break around $15,000 per capita GNI. Below this level wealth strongly predicts happiness with high variance. Above this level the slope flattens considerably — basic needs are met and other factors dominate."},
  {t:2, q:"What was the main motivation for shifting to the modern multidimensional view of development?",
   opts:["Traditional models could not measure GDP accurately","'Fixing' policies raised per capita income in the 1970s-80s but often failed to reduce individual poverty or inequality","Rich countries demanded a broader definition for aid targeting","The UN required a multidimensional index for all member states"],
   ans:1, exp:"During the 1970s and 80s, structural adjustment programs often succeeded in raising aggregate GDP but failed to improve conditions at the household level — poverty and inequality persisted or worsened. This showed that per capita income alone was an insufficient measure of development."},

  // T3
  {t:3, q:"Why are the three goals of development measurement described as 'nested'?",
   opts:["Each goal requires a different data source","Each successive goal places greater demands on the data — you must satisfy earlier goals first","They refer to nested geographic levels: local, national, global","Each goal applies only to a specific type of economy"],
   ans:1, exp:"Accurately describing current conditions is a precondition for valid intertemporal comparisons, which are in turn necessary for valid cross-country comparisons. The nesting means failures at the lower level propagate upward."},
  {t:3, q:"In the new HDI formula (2010-present), the three sub-indexes are combined using:",
   opts:["An arithmetic mean","A harmonic mean","A geometric mean","A weighted sum"],
   ans:2, exp:"$\\text{HDI} = (I_{\\text{Life}} \\times I_{\\text{Edu}} \\times I_{\\text{Income}})^{1/3}$. The geometric mean penalises imbalance — unlike the old arithmetic mean, a country cannot compensate a very low score in one dimension with high scores elsewhere."},
  {t:3, q:"A country has GNI per capita of $3,500 (PPP-adjusted). How does the World Bank classify it?",
   opts:["Low Income Country (LIC)","Lower Middle Income Country (LMC)","Upper Middle Income Country (UMC)","High Income Country (HIC)"],
   ans:1, exp:"LMC threshold: $1,026-$4,035. At $3,500 the country falls squarely in the Lower Middle Income category. LIC is ≤$1,025; UMC is $4,036-$12,475; HIC is ≥$12,476."},

  // T4
  {t:4, q:"Which type of colonial regime left the worst post-colonial institutional quality according to the 'reversal of fortune' argument?",
   opts:["Settler regimes (US, Canada, Australia)","Intermediate regimes (India, South America)","Exploitative 'steal fast and get out' regimes (most of Sub-Saharan Africa)","There was no systematic difference by regime type"],
   ans:2, exp:"Exploitative regimes had no incentive to build quality institutions — they extracted resources and left or delegated extraction to local elites. This produced the lowest post-colonial institutional quality. Settler regimes (US, Canada) built higher-quality institutions because settlers intended to live there."},
  {t:4, q:"Which type of convergence gives more weight to countries with larger populations and shows some evidence since 1976?",
   opts:["Absolute convergence","Relative convergence","Population-weighted relative convergence","Sectoral convergence"],
   ans:2, exp:"Population-weighted relative convergence weights growth rates by population, prioritising China and India. Since 1976 there is some evidence of this type of convergence, driven largely by China's rapid growth. Without population weighting, the global picture is much less favourable."},
  {t:4, q:"Dani Rodrik's research on sectoral convergence found convergence in which sector?",
   opts:["Agriculture","Services","Manufacturing","Finance"],
   ans:2, exp:"Rodrik finds strong evidence of manufacturing sector productivity convergence globally, even when whole-economy convergence is absent. This explains why manufacturing-led growth has been so powerful in China, India, and parts of South America, and why the poorest countries (with tiny manufacturing sectors) lag behind."},

  // T5
  {t:5, q:"In the Harrod-Domar model, what is the growth rate formula?",
   opts:["$g = c/s - \\delta$","$g = s/c - \\delta$","$g = s \\cdot c + \\delta$","$g = (s - \\delta)/c$"],
   ans:1, exp:"$g = s/c - \\delta$ where $s$ is the savings rate, $c$ is the capital-output ratio (ICOR), and $\\delta$ is depreciation. To grow faster: raise $s$ or reduce $c$. The model is linear in $s$."},
  {t:5, q:"What is the critical assumption that makes Harrod-Domar a 'linear-in-stages' model and also its key limitation?",
   opts:["Labour is perfectly mobile between sectors","The capital-output ratio $c$ is fixed (no factor substitution)","Savings always exceed investment","Population growth is exogenous"],
   ans:1, exp:"The fixed capital-output ratio $c$ (Leontief production function) means no substitution between capital and labour. In practice $c$ varies with technology, wages, and input prices. This makes growth predictions from Harrod-Domar unreliable for policy and is why Solow replaced it with a flexible production function."},
  {t:5, q:"Which type of technological progress increases the marginal product of a factor without changing its quantity?",
   opts:["Neutral technological progress","Factor-saving technological progress","Factor-augmenting technological progress","Capital-deepening technological progress"],
   ans:2, exp:"Factor-augmenting progress increases the marginal product of a specific factor (labour-augmenting = better education/health; capital-augmenting = better materials). This contrasts with factor-saving progress (substitutes one factor for another) and neutral progress (raises output without changing relative marginal products)."},

  // T6
  {t:6, q:"In the Lewis model, why are agricultural wages set equal to the average product of labour rather than the marginal product?",
   opts:["Agricultural workers have stronger unions than manufacturing workers","MPL in agriculture equals zero due to labour surplus, so wages cannot be set competitively — food is shared equally among all workers","The government sets a minimum wage equal to APL","Land is owned collectively so individual marginal products cannot be calculated"],
   ans:1, exp:"With a large labour surplus, the marginal product of adding one more agricultural worker is zero. A competitive wage of zero cannot sustain workers. Instead, total agricultural output is shared equally, giving $w_A = Y_A/L_A = APL_A$."},
  {t:6, q:"What triggers migration from the agricultural to the manufacturing sector in the Lewis model?",
   opts:["A government policy mandating urban migration","The manufacturing wage rising above the agricultural wage ($w_M > w_A$)","A decline in agricultural output","A rise in the capital-output ratio"],
   ans:1, exp:"When $w_M > w_A$, workers voluntarily migrate to the higher-paying urban sector. In the model, this is triggered by capital accumulation raising MPL in manufacturing — which raises $w_M$ above the subsistence agricultural wage $w_A$."},
  {t:6, q:"Which feature of the Lewis model does the Harris-Todaro model (Topic 16) directly address as a limitation?",
   opts:["The assumption that capital is labour-augmenting","The absence of urban unemployment — the Lewis model assumes anyone migrating to the city immediately finds work","The treatment of agricultural wages as equal to average product","The closed economy assumption"],
   ans:1, exp:"In Lewis, any worker migrating to manufacturing immediately finds employment at the prevailing wage. In reality, migrants often cannot find work and face urban unemployment. Harris-Todaro models this explicitly: workers migrate based on the expected urban wage (actual wage × probability of employment), not the certain wage."},

  {t:7, q:"In the Solow model, at equilibrium $k^*$, which condition holds?",
   opts:["$sf(k^*) > (\\delta+n)k^*$","$sf(k^*) < (\\delta+n)k^*$","$sf(k^*) = (\\delta+n)k^*$","$\\Delta k^* > 0$"],
   ans:2, exp:"At equilibrium $k^*$, savings exactly offsets capital depletion: $sf(k^*) = (\\delta+n)k^*$, so $\\Delta k = 0$."},
  {t:7, q:"The Solow Residual accounts for approximately what fraction of economic growth?",
   opts:["10%","25%","50%","75%"],
   ans:2, exp:"The Solow Residual (TFP) determines about 50% of economic growth — the model explains only half of growth and tells us nothing about the other half."},
  {t:7, q:"According to the Solow model, what is the only source of sustained long-run economic growth?",
   opts:["Increasing the savings rate $s$","Population growth $n$","Technological change","Foreign direct investment"],
   ans:2, exp:"Increasing $s$ causes a one-time level shift to a higher $k^*$, not sustained growth. Only technological change (shifts in $A$) can continuously increase per capita output."},
  {t:8, q:"In the Romer model, if $\\beta = 0$, what does the long-run growth equation reduce to?",
   opts:["$g = 0$","$g = n$","$g = \\alpha n$","$g \\to \\infty$"],
   ans:1, exp:"If $\\beta=0$: $g = \\frac{n(1-\\alpha)}{1-\\alpha-0} = n$. Same result as Solow — per capita income is constant in the long run."},
  {t:8, q:"In the Romer model, which direction does foreign investment tend to flow, and why?",
   opts:["To poorer countries, because scarce capital earns higher returns","To wealthier countries, because increasing returns make returns highest where capital is already high","Equally to all countries","Only to countries with the highest savings rates"],
   ans:1, exp:"Increasing returns mean investment returns are highest where the capital stock is already large (HICs). This predicts FDI flowing to wealthier countries — consistent with real-world observations."},
  {t:8, q:"What does the $\\bar{K}^\\beta$ term in the Romer firm-level production function represent?",
   opts:["The firm's own private capital","Depreciation of capital","Knowledge spillovers from other firms' investments (a public good)","Fixed costs of production"],
   ans:2, exp:"$\\bar{K}^\\beta$ (average capital across firms) represents spillovers — knowledge created by other firms' investments becomes a public good. This is the 'endogenous' component of technological change."},
  {t:9, q:"Which statement about Nash Equilibria (NE) and Dominant Strategy Equilibria (DSE) is TRUE?",
   opts:["All NE are DSE","All DSE are NE","They are completely separate concepts","DSE are more general than NE"],
   ans:1, exp:"DSE are a special case of NE — the equilibrium strategy is optimal regardless of others' choices, which automatically satisfies the NE condition. NE is more general."},
  {t:9, q:"In the multiple equilibria model, what characterizes a STABLE equilibrium?",
   opts:["It has the highest payoffs for all players","It is robust to small deviations — the system returns to it","Any deviation shifts the system to another equilibrium","It always requires government coordination"],
   ans:1, exp:"Stable equilibria are 'robust' — small deviations cause the system to return to them, analogous to $k^*$ in Solow. Unstable equilibria cause the system to shift elsewhere upon any deviation."},
  {t:9, q:"What did mobile phones primarily solve in the Kerala fish markets?",
   opts:["They directly reduced fish spoilage","They reduced transportation costs","Coordination failure — enabling fishermen and buyers to find profitable markets","They eliminated middlemen from the supply chain"],
   ans:2, exp:"Mobile phones solved the coordination failure: fishermen and buyers couldn't find each other, wasting fish. Better information allowed coordination on profitable equilibria."},
  {t:10, q:"In the Big Push model, the W2 scenario (intermediate wages) represents which real-world situation?",
   opts:["Countries like HICs that naturally modernize on their own","Countries like LICs permanently stuck in poverty","Countries like the Asian Tigers that needed coordination to transition","Countries with no manufacturing sector"],
   ans:2, exp:"W2 represents countries where a firm will only modernize if others do too — coordination is required. This captures countries like the Asian Tigers that transitioned with appropriate coordination or external support."},
  {t:10, q:"Why are only 'all modernize' or 'none modernize' Nash equilibria in the Big Push model?",
   opts:["Because firms have different technologies","Because all firms are identical, so symmetric outcomes are the only possible NE","Because the government mandates it","Because demand is perfectly inelastic"],
   ans:1, exp:"Due to symmetry (all firms identical, same decision), any outcome where firms differ cannot be a NE — at least one firm is not playing its best response. Only unanimous outcomes qualify."},
  {t:10, q:"In the Big Push model, the total wage bill for a modern firm $W_i(Q)$ equals:",
   opts:["$w_i \\cdot Q$","$w_i(F + cQ)$","$F + Q$","$w_t \\cdot Q$"],
   ans:1, exp:"The modern firm's labor requirement is $L = F + cQ$, so the total wage bill (= total cost) is $W_i(Q) = w_i(F + cQ)$, where $F$ is the fixed cost and $c$ is the marginal labor requirement."},
  {t:11, q:"What property of the O-Ring production function creates 'one bad apple spoils the bunch'?",
   opts:["Output is the sum of input qualities","Output is the maximum input quality","Output is the product of all input qualities","Output equals the lowest input quality"],
   ans:2, exp:"$F = B\\prod q_i$. When output is a product, a single low-quality input (close to 0) drives total output close to 0, regardless of how high other input qualities are."},
  {t:11, q:"Why does O-Ring production lead to assortative matching?",
   opts:["Regulations require it","High-quality inputs have higher marginal products in high-quality firms, so high-quality firms always outbid low-quality firms for top inputs","Low-quality firms prefer low-quality workers to cut costs","It is purely random"],
   ans:1, exp:"In O-Ring production, $\\partial^2 F / \\partial q_i \\partial q_j > 0$ — the marginal product of input $i$ rises with the quality of input $j$. High-quality firms therefore value additional quality more and outbid low-quality firms."},
  {t:12, q:"According to the development economics consensus, population growth is:",
   opts:["The primary cause of poverty in developing countries","Not the primary cause of poverty, but rapid growth can inhibit development","Entirely a manufactured concern by wealthy nations","Irrelevant to development outcomes"],
   ans:1, exp:"The consensus (Todaro & Smith) holds that population growth is NOT the primary cause of poverty. Low resources reflect poverty. However, rapid growth or extreme density can inhibit development prospects."},
  {t:12, q:"In the Solow model, why does population growth $n$ act like depreciation?",
   opts:["Population growth directly destroys physical capital","The same capital stock must be shared among more people, reducing per capita capital","Population growth increases the savings rate","It shifts the production function downward"],
   ans:1, exp:"In $\\Delta k = sf(k) - (\\delta+n)k$, $n$ appears alongside $\\delta$ because capital must be spread across more people as population grows. Additional savings must offset this dilution of per capita capital."},
  {t:12, q:"What is the 'hidden momentum of population growth'?",
   opts:["Population data is often underreported in LICs","Even with falling fertility rates, large young cohorts mean more people are in childbearing ages, keeping total births high","Population growth always accelerates before decelerating","Governments hide true birth rates in their statistics"],
   ans:1, exp:"A wide-base pyramid means a large share of the population is in reproductive age brackets. Even if each woman has fewer children, the large cohort size sustains or increases total births — building 'hidden momentum'."},
  {t:12, q:"What was the primary driver of the world population explosion in the 19th-20th centuries?",
   opts:["Rising birth rates and higher fertility","Declining death rates due to control of famine, disease, and malnutrition","Mass international migration","The agricultural revolution in developing countries"],
   ans:1, exp:"Global fertility rates have only fallen over time. The explosion was driven by falling death rates as famine, disease, plague, and malnutrition came under control. Crude death rates are now at historic lows."},

  // T13 QUIZ
  {t:13, q:"According to the Kuznets Curve, what happens to inequality as a country develops?",
   opts:["Inequality continuously falls","Inequality first rises, then falls (inverted-U)","Inequality first falls, then rises","Inequality is unrelated to development"],
   ans:1, exp:"Kuznets's inverted-U: early industrialisation pulls workers from low-inequality agriculture into high-variance urban sectors, widening inequality. As development matures, inequality narrows. However, more recent evidence contradicts this as a universal law."},
  {t:13, q:"The Kuznets Ratio is defined as:",
   opts:["Top 10% share / Bottom 10% share","Top 20% share / Bottom 40% share","Bottom 40% share / Top 20% share","Top 50% share / Bottom 50% share"],
   ans:1, exp:"KR = (income share of top 20%) / (income share of bottom 40%). A higher ratio means more inequality. Perfect equality gives KR = 0.5; higher values indicate greater concentration at the top."},
  {t:13, q:"Which inequality measure FAILS the Transfer Principle?",
   opts:["Gini Coefficient","Coefficient of variation","Kuznets Ratio","None — all satisfy it"],
   ans:2, exp:"The Kuznets Ratio only compares two group aggregates. Transfers within a group (e.g., from the 2nd quintile to the 1st quintile) leave both group totals unchanged — making the ratio blind to such pro-equality transfers."},
  {t:13, q:"On the Lorenz curve, what does a point at $x=0.4$, $y=0.15$ mean?",
   opts:["The richest 40% earn 15% of income","The bottom 40% earn 15% of income","40% of income goes to 15% of people","15% of people are below the poverty line"],
   ans:1, exp:"The Lorenz curve plots cumulative population share (ordered from poorest to richest) on x against cumulative income share on y. So (0.4, 0.15) means the bottom 40% of the population earn only 15% of total income."},

  // T14 QUIZ
  {t:14, q:"Which poverty measure is INSENSITIVE to how poor the poor are (only counts heads)?",
   opts:["Total Poverty Gap (TPG)","Average Poverty Gap (APG)","Headcount Index (HI)","FGT $P_2$"],
   ans:2, exp:"HI = H/N simply counts the fraction below the poverty line. Lifting someone from $1 below the line to just above it reduces HI identically to lifting someone from extreme destitution — it ignores depth of poverty entirely."},
  {t:14, q:"In the FGT family, $P_2$ (squared poverty gap) is special because it:",
   opts:["Equals the Headcount Index","Equals the Normalized Poverty Gap","Satisfies distributional sensitivity by incorporating inequality among the poor via $CV_P^2$","Has no relationship to other poverty measures"],
   ans:2, exp:"$P_2 = \\frac{H}{N}[NIS^2 + (1-NIS)^2 CV_P^2]$. The $CV_P^2$ term captures inequality within the poor. A transfer from a poorer to a less-poor person (both below the line) increases $CV_P^2$ and thus $P_2$ — satisfying distributional sensitivity."},
  {t:14, q:"Engel's Law states that as income rises:",
   opts:["Total food spending falls","The fraction of income spent on food falls","The fraction of income spent on food rises","Total food spending and its share both stay constant"],
   ans:1, exp:"Engel's Law: the food share of income declines as income rises (even as total spending on food may increase). This underpins nutrition-based poverty line calculations — you find the income level at which a family can afford the minimum caloric basket."},

  // T15 QUIZ
  {t:15, q:"Why do different poverty measures sometimes rank countries differently?",
   opts:["Measurement error","Some comparisons are inherently ambiguous — e.g. crossing Lorenz curves — and different measures resolve the ambiguity differently","One measure is always correct","Countries lie about their data"],
   ans:1, exp:"When Lorenz curves cross, Country A may look more equal in the bottom half and Country B in the top half. No measure can unambiguously rank them without making an implicit value judgment about which part of the distribution matters more."},
  {t:15, q:"Which poverty measure satisfies ALL FOUR key properties (Anonymity, Population Independence, Monotonicity, Distributional Sensitivity)?",
   opts:["Headcount Index ($HI$)","Total Poverty Gap ($TPG$)","Average Poverty Gap ($APG$)","FGT Squared Poverty Gap ($P_2$)"],
   ans:3, exp:"$HI$ fails Population Independence (no — wait: HI passes pop indep). Let me restate: Only $P_2$ satisfies Distributional Sensitivity (via the $CV_P^2$ term). $H$ and $HI$ fail monotonicity; $APG$ and $TPG$ fail distributional sensitivity. $P_2$ is the only measure here that satisfies all four."},
  {t:15, q:"Scale Independence for inequality measures means:",
   opts:["Doubling the population doesn't change inequality","Doubling everyone's income doesn't change measured inequality","Adding a constant income to everyone doesn't change inequality","The measure doesn't depend on who holds the income"],
   ans:1, exp:"Scale Independence: if all incomes are multiplied by the same constant (e.g., all denominated in dollars vs euros), measured inequality is unchanged. The Kuznets Ratio and Gini both satisfy this because they are based on income shares and relative areas, not absolute dollar amounts."},

  // T16 QUIZ
  {t:16, q:"In Harris-Todaro, what does the urban labor market adjustment mechanism involve?",
   opts:["Manufacturing wages rising until equal to agricultural wages","Manufacturing firms hiring more workers","The number of urban unemployed adjusting until the expected urban wage equals the agricultural wage","Agricultural wages rising to match manufacturing wages"],
   ans:2, exp:"$\\bar{W}_M$ and $L_M$ are both fixed. The only variable that can restore equilibrium is $L_{US}$ — the total urban labor supply. Unemployment grows until the probability of being hired $(L_M/L_{US})$ is low enough that expected wages equal $W_A$."},
  {t:16, q:"Harris-Todaro predicts that creating new manufacturing jobs could:",
   opts:["Always reduce urban unemployment","Leave urban unemployment unchanged or increase it","Only help if minimum wages are removed","Never affect migration"],
   ans:1, exp:"More jobs raise the hiring probability, which raises the expected urban wage above $W_A$, inducing more rural-urban migration. If migration exceeds job creation, total unemployment rises. In general, the unemployment rate $u^* = 1 - W_A/\\bar{W}_M$ is independent of $L_M$ — only wages determine the rate."},

  // T17 QUIZ
  {t:17, q:"What is the primary economic force that causes cities to form and grow?",
   opts:["Government policy","Agglomeration economies — cost reductions from co-locating firms, workers, and consumers","Higher agricultural wages pushing workers to cities","Random historical accident exclusively"],
   ans:1, exp:"Agglomeration economies (localization + urbanization) create cost advantages for firms and workers clustering together. Government policy and historical accidents may determine where cities form, but agglomeration economies explain why they persist and grow."},
  {t:17, q:"According to the political economy theory of urban giantism, autocratic rulers favor large capital cities because:",
   opts:["Capital cities are always economically efficient","Larger cities produce more tax revenue","Concentrating resources in the capital appeases the urban population and limits the threat of unrest","Dictators personally prefer urban environments"],
   ans:2, exp:"Dictators face a credible threat from concentrated urban populations. By routing patronage (infrastructure, jobs, subsidies) to capital cities, they keep the urban population relatively satisfied, reducing the risk of revolt. This creates a systematic political distortion toward oversized capitals."},
  {t:17, q:"What fraction of urban inhabitants in developing countries live in slums?",
   opts:["About 10%","About 1/3","About 2/3","Nearly all"],
   ans:1, exp:"Globally, just under 1/3 of urban residents in developing countries live in slums — areas of dense housing that fail at least one UN quality criterion. The share is higher in Sub-Saharan Africa and South Asia."},

  // T18 QUIZ
  {t:18, q:"In the Tragedy of the Commons, why do open-access fishermen overfish relative to the social optimum?",
   opts:["They prefer to fish than work elsewhere","They maximize total output not profit","They fish until average product = wage, whereas the optimum is marginal product = wage; AP > MP → over-entry","The owner sets a quota too high"],
   ans:2, exp:"Without excludability, any fisherman fishes as long as their average share of output ≥ wage. The socially optimal owner stops hiring when the last worker's marginal contribution = wage. Since AP > MP for concave production, open access attracts too many workers: $L_C > L^*$."},
  {t:18, q:"For public goods, aggregate demand is found by:",
   opts:["Horizontal summation — adding quantities at each price","Vertical summation — adding willingness-to-pay at each quantity","Multiplying individual demands","Taking the maximum of individual demands"],
   ans:1, exp:"Because everyone simultaneously consumes the same unit of a public good, the aggregate benefit of one unit = the sum of all individuals' marginal benefits. So we vertically sum demand curves: $\\sum_i MB_i(Q) = MC$ at the social optimum."},
  {t:18, q:"Which of the four property rights criteria most directly causes tragedy of the commons?",
   opts:["Universality","Excludability","Transferability","Enforceability"],
   ans:1, exp:"When excludability fails, the resource owner cannot prevent others from using the resource. This removes the owner's ability to set prices, leading to over-use. The fundamental theorem of welfare economics requires all four criteria — but excludability failure is the direct cause of commons tragedy."},

  // EXAMPLE-BASED QUESTIONS
  {t:13, q:"[Example] Quintile shares: Q1=5%, Q2=9%, Q3=13%, Q4=23%, Q5=50%. What is the Kuznets Ratio?",
   opts:["2.50","3.57","4.17","5.00"],
   ans:1, exp:"Bottom 40% = Q1+Q2 = 5+9 = 14%. Top 20% = Q5 = 50%. KR = 50/14 = 3.57. Perfect equality would give KR = 0.5; this value of 3.57 indicates substantial inequality."},
  {t:14, q:"[Example] Incomes {0,1,2,6,7}, $Y_p=3$. What is $P_1$ (Normalized Poverty Gap)?",
   opts:["0.40","0.60","0.20","0.30"],
   ans:0, exp:"$H=3$. Shortfalls: 3, 2, 1. $TPG=6$. $APG=6/5=1.2$. $NPG = APG/Y_p = 1.2/3 = 0.40$. And $P_1 = NPG$ by the FGT framework (when $\\alpha=1$, each term = $(Y_p-Y_i)/Y_p$, summed and divided by $N$)."},
  {t:16, q:"[Example] $\\bar{W}_M=3$, $W_A=1$, $L_M=20$. What is the equilibrium unemployment rate $u^*$?",
   opts:["33%","50%","67%","75%"],
   ans:2, exp:"$u^* = 1 - W_A/\\bar{W}_M = 1 - 1/3 = 2/3 \\approx 67\\%$. Also: $L_{US}^* = 20 \\times 3/1 = 60$. Unemployment = 60-20 = 40. Rate = 40/60 = 67%. Very high unemployment is an equilibrium result — not a sign of market failure per se, but of a fixed wage far above the agricultural wage."},
  {t:18, q:"[Example] $f(L)=10\\sqrt{L}$, $w=2$. What is the ratio $L_C / L^*$?",
   opts:["2×","4×","5×","10×"],
   ans:1, exp:"Open access attracts 4× too many fishermen — all surplus is dissipated."},

  // ORIGINAL EXAMPLE-BASED QUESTIONS (T7-T12)
  {t:7, q:"[Example] With $\\alpha=0.5$, $s=0.25$, $\\delta=0.05$, $n=0.05$, what is $k^*$?",
   opts:["$k^* = 4$","$k^* = 6.25$","$k^* = 9$","$k^* = 2.5$"],
   ans:1, exp:"Set $sf(k^*)=(\\delta+n)k^*$: $0.25(k^*)^{0.5} = 0.10 k^*$. Divide: $0.25/0.10 = (k^*)^{0.5} = 2.5$. Square: $k^* = 6.25$."},
  {t:8, q:"[Example] With $\\alpha=0.4$, $\\beta=0.3$, $n=0.02$, what is the long-run growth rate $g$?",
   opts:["$g = 2\\%$","$g = 4\\%$","$g = 6\\%$","$g = 12\\%$"],
   ans:1, exp:"$$g = \\frac{n(1-\\alpha)}{1-\\alpha-\\beta} = \\frac{0.02 \\times 0.6}{1 - 0.4 - 0.3} = \\frac{0.012}{0.3} = 0.04 = 4\\%$$The spillover term $\\beta=0.3$ more than doubles the growth rate compared to the Solow benchmark of $g=n=2\\%$."},
  {t:11, q:"[Example] Two workers with $q_H=0.8$ and $q_L=0.5$, $B=1$. What is the O-Ring output of a firm that employs both?",
   opts:["$F = 1.30$","$F = 0.40$","$F = 0.64$","$F = 0.25$"],
   ans:1, exp:"$F(0.8, 0.5) = 0.8 \\times 0.5 = 0.40$. Output is the product of quality levels — not the sum (1.30), not $0.8^2=0.64$, and not $0.5^2=0.25$. This is the key property of the O-Ring function."},
  {t:12, q:"[Example] A country has 20M aged 0-14, 50M aged 15-64, and 10M aged 65+. What is its dependency ratio?",
   opts:["0.40","0.50","0.60","0.80"],
   ans:2, exp:"Dependency ratio $= (20+10)/50 = 30/50 = 0.60$. For every 100 workers, 60 dependents — a moderate ratio typical of a middle-income country in demographic transition."},

  // PROOF-BASED QUESTIONS
  {t:7, q:"[Proof] At $k^*$ in the Solow model, $\\phi(k) = sf(k)-(\\delta+n)k$. What is $\\phi'(k^*)$ equal to?",
   opts:["$(1-\\alpha)(\\delta+n)$","$(\\alpha-1)(\\delta+n)$","$\\alpha(\\delta+n)$","$0$"],
   ans:1, exp:"$\\phi'(k^*) = s\\alpha Ak^{*\\alpha-1} - (\\delta+n)$. At $k^*$, $sAk^{*\\alpha-1}=\\delta+n$, so $s\\alpha Ak^{*\\alpha-1}=\\alpha(\\delta+n)$. Thus $\\phi'(k^*)=\\alpha(\\delta+n)-(\\delta+n)=(\\alpha-1)(\\delta+n)$. Since $\\alpha<1$ this is negative — confirming stability."},
  {t:8, q:"[Proof] In the Romer model derivation, which substitution turns $g=(\\alpha+\\beta)\\dot{K}/K+(1-\\alpha)n$ into a solvable equation?",
   opts:["Setting $\\dot{K}/K = 0$","Using $\\dot{K}/K = g$ (steady-state condition that $\\dot{Y}/Y = \\dot{K}/K$)","Setting $n = 0$","Dividing by $\\alpha+\\beta$"],
   ans:1, exp:"In steady state, $Y/K$ is constant, which implies $\\dot{Y}/Y = \\dot{K}/K = g$ (proven by differentiating $Y=aK$). Substituting $\\dot{K}/K=g$ makes both unknown growth rates equal, giving one equation in $g$ that can be solved."},
  {t:11, q:"[Proof] What does $(q_H - q_L)^2 > 0$ directly prove in the O-Ring assortative matching proof?",
   opts:["That $q_H > q_L$","That assortative output $q_H^2+q_L^2$ exceeds heterogeneous output $2q_Hq_L$","That high-skill workers earn more","That $\\partial^2F/\\partial q_i \\partial q_j > 0$"],
   ans:1, exp:"Expanding $(q_H-q_L)^2 > 0$ gives $q_H^2 - 2q_Hq_L + q_L^2 > 0$, i.e. $q_H^2+q_L^2 > 2q_Hq_L$. The left side is assortative total output; the right side is heterogeneous total output. The inequality proves assortative matching dominates."},
  {t:12, q:"[Proof] In the quotient-rule derivation of $\\dot{k}$, what produces the $-nk$ term?",
   opts:["Physical depreciation of capital","Dividing $K\\dot{L}/L^2 = k \\cdot (\\dot{L}/L) = nk$ — new workers diluting per capita capital","A direct assumption made by Solow","The savings term $sY/L$"],
   ans:1, exp:"Differentiating $k=K/L$ by the quotient rule: $\\dot{k}=\\dot{K}/L - K\\dot{L}/L^2 = \\dot{K}/L - k(\\dot{L}/L)$. Since $\\dot{L}/L=n$, the second term becomes $-nk$. This represents existing capital being 'spread thinner' over a growing population — exactly symmetric to depreciation $-\\delta k$."},

  // T19
  {t:19, q:"Which source of particulate matter is described as especially dangerous for women and children in LICs?",
   opts:["Industrial factory emissions","Coal power plant exhaust","Indoor biomass burning for cooking and heating","Burning of crop residue in fields"],
   ans:2, exp:"Indoor burning of biomass (wood, dung, crop waste) for cooking and heating in unventilated homes exposes occupants — primarily women and children — to extreme PM concentrations daily. Duflo, Greenstone, and Hanna research documents the severe health impacts. Outdoor sources are still harmful but indoor exposure is far more concentrated and prolonged."},
  {t:19, q:"Why are developing countries uniquely vulnerable to global warming compared to rich countries?",
   opts:["They produce more CO2 emissions per capita","Their populations are older and less able to adapt","High reliance on farming and fishing, poor construction quality, limited disaster response, and fragile political systems","They have fewer renewable energy sources"],
   ans:2, exp:"LICs are uniquely vulnerable because: (1) livelihoods depend directly on climate-sensitive farming and fishing; (2) poor-quality construction cannot withstand stronger storms; (3) governments lack capacity to respond to disasters; (4) political systems are fragile — the Darfur crisis may have been triggered by climate-driven drought. Rich countries have the same physical exposure but far greater adaptive capacity."},
  {t:19, q:"What is the core policy challenge for addressing global environmental problems like climate change?",
   opts:["Developing countries lack the technology to reduce emissions","Solutions require coordinated action by both developed and developing countries, creating a collective action problem","Developed countries have already reduced emissions sufficiently","Environmental problems are best solved by individual market actors without government intervention"],
   ans:1, exp:"Developed countries are historically responsible for most cumulative emissions; developing countries account for most future growth. Individual country incentives diverge from the global optimum — this is the same public goods / externality failure at international scale. No single country has sufficient incentive to act alone, requiring difficult international coordination."},

  // T20
  {t:20, q:"The natural sex ratio at birth is approximately 1.06 (males per female). If a country reports a birth ratio of 1.14, what fraction of expected girls are missing?",
   opts:["7%","14%","6%","About 1%"],
   ans:0, exp:"$f_a/f_e = r_e/r_a = 1.06/1.14 \\approx 0.930$. So $1 - 0.930 = 0.070 = 7\\%$ of expected girls are missing. This formula assumes actual males equal expected males — all deviation from biological norm is attributed to excess female mortality."},
  {t:20, q:"Fischer's Principle states that 1:1 is a stable sex ratio equilibrium. What is the biological mechanism that enforces this?",
   opts:["Governments regulate birth ratios through policy","Natural selection: when one sex is scarce, genes for producing that sex spread, restoring the balance","Random variation in births naturally averages to 1:1 over time","Females have stronger immune systems, offsetting male birth advantages"],
   ans:1, exp:"When one sex is scarce, members of that sex find mates more easily and produce more offspring. Individuals with genetic predispositions to produce the scarce sex will be over-represented in the next generation. Their genes spread until the sex ratio returns to 1:1 — at which point the advantage disappears. This is an evolutionarily stable strategy."},
  {t:20, q:"According to Qian (2008), what reduced son preference in tea-growing regions of China?",
   opts:["Government enforcement of gender equality laws","Increased women's income from tea cultivation, which raised the economic value of having daughters","Urbanisation reducing the need for male agricultural labour","Education campaigns about gender equality"],
   ans:1, exp:"Maoist reforms promoted tea cultivation in some areas (tea picking favours women's smaller hands). Women earned 10% more income in tea areas. This raised the fraction of girls surviving to adulthood by 1%. The finding shows son preference is partly driven by economics — when daughters have higher earning potential, their relative value rises and excess female mortality falls."},

  // T21
  {t:21, q:"What fraction of the world's poorest people are located in rural areas?",
   opts:["About one-third","About half","About two-thirds","Nearly all"],
   ans:2, exp:"About 2/3 of the world's poorest are in rural areas, usually engaged in subsistence agriculture. This is why development cannot focus exclusively on urban manufacturing — it must also raise agricultural productivity and rural incomes. 2 billion people are involved in farming globally."},
  {t:21, q:"In Timmer's structural transformation, what happens in Stage 2?",
   opts:["Agricultural productivity surplus is created through technology","The agricultural surplus is transferred to the urban sector via investment, taxation, or price controls","Labour markets fully integrate across sectors","Agriculture reaches a modern commercial stage"],
   ans:1, exp:"Stage 1 creates the agricultural surplus. Stage 2 transfers it to the urban/manufacturing sector — through investment of agricultural profits, taxation of agriculture to fund urban development, or price controls that keep food cheap for urban workers. This is how the savings-driven growth of the Lewis model actually gets funded."},
  {t:21, q:"What is the key barrier that traps farmers in subsistence agriculture?",
   opts:["Lack of information about better crop varieties","Risk: HYV crops are more sensitive to conditions, and subsistence farmers cannot afford the downside risk of crop failure","Poor soil quality in most LICs","Government regulations preventing technology adoption"],
   ans:1, exp:"Higher-yield varieties require more inputs and are more sensitive to weather, pests, and timing — they have higher variance. A farmer near subsistence cannot afford a bad harvest that falls below the survival minimum. Even if expected yield is higher with HYV, the downside risk is catastrophic. This is a rational poverty trap, not an information failure."},

  // T22
  {t:22, q:"Why doesn't standard yield-based crop insurance work in agricultural insurance markets?",
   opts:["Crop yields are too variable to be insurable","Moral hazard: farmers reduce investments in fertiliser, irrigation, and care knowing they'll be compensated for low yields","Adverse selection: only the worst farmers buy insurance","Government subsidies crowd out private insurance markets"],
   ans:1, exp:"Yield-based insurance creates moral hazard — the insured variable (yield) is directly controlled by the farmer. Reducing care, irrigation, or fertiliser cuts costs for the farmer while the insurer bears the downside. Rainfall insurance solves this because rainfall is exogenous — farmers cannot affect it, so investment incentives are fully preserved."},
  {t:22, q:"Which crop was at the center of the Green Revolution, and who developed the key variety?",
   opts:["Rice — Norman Borlaug","Wheat — Norman Borlaug (HYV wheat, Nobel Peace Prize)","Maize — Fritz Haber","Sorghum — a team at CGIAR"],
   ans:1, exp:"Norman Borlaug developed HYV wheat — with stronger stalks to support more seeds, faster maturation enabling more growing seasons, wider temperature tolerance, and natural pest resistance. He won the Nobel Peace Prize. HYV rice was developed separately for Asia's primary staple. Together they produced dramatic productivity increases and averted large-scale famine."},
  {t:22, q:"A risk-averse farmer (log utility) compares: traditional yield = 10 (certain); HYV = 20 (p=0.6) or 3 (p=0.4). Expected utility of HYV = 2.24; U(traditional) = 2.30. What does this illustrate?",
   opts:["The farmer is irrational for not choosing the higher expected yield","The agricultural poverty trap — rational risk aversion leads farmers to choose lower expected yield to avoid catastrophic outcomes","A market failure requiring government price supports","That HYV seeds are economically inferior to traditional varieties"],
   ans:1, exp:"Expected yield of HYV (13.2) exceeds traditional (10), yet the risk-averse farmer correctly chooses traditional because the 40% chance of yield = 3 (near or below subsistence minimum) is catastrophic. This is a rational poverty trap: the farmer would adopt HYV if crop insurance removed the downside risk. This is why insurance markets are critical for agricultural development."},
];

// ========== STATE ==========
let currentMode = 'overview';
let currentTopic = 'all';
let fcIndex = 0;
let fcFlipped = false;
let filteredCards = [];
let quizAnswered = {};
let quizScore = 0;

// ========== MODES ==========
function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('overview-view').style.display = 'none';
  document.getElementById('notes-view').style.display = 'none';
  document.getElementById('flashcard-view').style.display = 'none';
  document.getElementById('quiz-view').style.display = 'none';
  document.getElementById('topic-strip').style.display = 'none';

  if (mode === 'overview') {
    document.getElementById('overview-view').style.display = 'block';
  } else if (mode === 'notes') {
    document.getElementById('notes-view').style.display = 'block';
    document.getElementById('topic-strip').style.display = 'flex';
    showNotesForTopic(currentTopic === 'all' ? 7 : currentTopic);
  } else if (mode === 'flashcards') {
    document.getElementById('flashcard-view').style.display = 'block';
    document.getElementById('topic-strip').style.display = 'flex';
    initFlashcards();
  } else if (mode === 'quiz') {
    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('topic-strip').style.display = 'flex';
    renderQuiz();
  }
}

function setTopic(t) {
  currentTopic = t;
  document.querySelectorAll('.topic-chip').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  if (currentMode === 'notes') showNotesForTopic(t === 'all' ? 7 : t);
  if (currentMode === 'flashcards') initFlashcards();
  if (currentMode === 'quiz') renderQuiz();
}

function jumpToNotes(t) {
  currentTopic = t;
  currentMode = 'notes';
  document.querySelectorAll('.mode-btn').forEach((b,i) => b.classList.remove('active'));
  document.querySelectorAll('.mode-btn')[1].classList.add('active');
  document.getElementById('overview-view').style.display = 'none';
  document.getElementById('notes-view').style.display = 'block';
  document.getElementById('topic-strip').style.display = 'flex';
  document.querySelectorAll('.topic-chip').forEach(c => {
    c.classList.remove('active');
    if (c.getAttribute('onclick') === `setTopic(${t})`) c.classList.add('active');
  });
  showNotesForTopic(t);
}

function showNotesForTopic(t) {
  document.querySelectorAll('.notes-container').forEach(n => n.classList.remove('active'));
  const el = document.getElementById('notes-' + t);
  if (el) el.classList.add('active');
}

// ========== FLASHCARDS ==========
function initFlashcards() {
  filteredCards = currentTopic === 'all' ? flashcards : flashcards.filter(c => c.t === currentTopic);
  fcIndex = 0;
  fcFlipped = false;
  renderFC();
}

function renderFC() {
  if (!filteredCards.length) return;
  const card = filteredCards[fcIndex];
  document.getElementById('fc-progress').textContent = `Card ${fcIndex+1} of ${filteredCards.length} · Topic ${card.t}`;
  document.getElementById('fc-question').innerHTML = card.q;
  document.getElementById('fc-answer').innerHTML = card.a;
  const el = document.getElementById('fc-card');
  el.classList.remove('flipped');
  document.getElementById('fc-label').textContent = 'Question';
  fcFlipped = false;
  // Re-render KaTeX in the card
  if (window.renderMathInElement) {
    renderMathInElement(document.getElementById('fc-card'), {
      delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],
      throwOnError:false
    });
  }
}

function flipCard() {
  fcFlipped = !fcFlipped;
  const el = document.getElementById('fc-card');
  if (fcFlipped) {
    el.classList.add('flipped');
    document.getElementById('fc-label').textContent = 'Answer';
  } else {
    el.classList.remove('flipped');
    document.getElementById('fc-label').textContent = 'Question';
  }
}

function fcNav(dir) {
  fcIndex = (fcIndex + dir + filteredCards.length) % filteredCards.length;
  renderFC();
}

// ========== QUIZ ==========
function getFilteredQuestions() {
  return currentTopic === 'all' ? quizQuestions : quizQuestions.filter(q => q.t === currentTopic);
}

function renderQuiz() {
  quizAnswered = {};
  quizScore = 0;
  const questions = getFilteredQuestions();
  const container = document.getElementById('quiz-questions');
  container.innerHTML = '';
  updateScore();
  questions.forEach((q, qi) => {
    const div = document.createElement('div');
    div.className = 'quiz-q';
    div.innerHTML = `
      <div class="quiz-q-num">Q${qi+1} · Topic ${q.t}</div>
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt,oi) => `<button class="quiz-opt" onclick="answerQ(${qi},${oi})" id="opt-${qi}-${oi}">${opt}</button>`).join('')}
      </div>
      <div class="quiz-explain" id="explain-${qi}">${q.exp}</div>
    `;
    container.appendChild(div);
  });
  // Re-render KaTeX in quiz
  if (window.renderMathInElement) {
    renderMathInElement(container, {
      delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],
      throwOnError:false
    });
  }
}

function answerQ(qi, selected) {
  if (quizAnswered[qi] !== undefined) return;
  quizAnswered[qi] = selected;
  const questions = getFilteredQuestions();
  const q = questions[qi];
  const correct = q.ans;
  document.getElementById(`opt-${qi}-${selected}`).classList.add(selected === correct ? 'correct' : 'wrong');
  if (selected !== correct) document.getElementById(`opt-${qi}-${correct}`).classList.add('correct');
  for (let i = 0; i < q.opts.length; i++) document.getElementById(`opt-${qi}-${i}`).disabled = true;
  document.getElementById(`explain-${qi}`).classList.add('show');
  if (selected === correct) quizScore++;
  updateScore();
}

function updateScore() {
  const answered = Object.keys(quizAnswered).length;
  document.getElementById('quiz-score').textContent = `${quizScore} / ${answered}`;
  const pct = answered > 0 ? Math.round((quizScore/answered)*100) : 0;
  document.getElementById('quiz-pct').textContent = answered > 0 ? `(${pct}%)` : '';
}

function resetQuiz() { renderQuiz(); }

// ========== INIT ==========
initFlashcards();

// ========== CHART DEFAULTS ==========
Chart.defaults.color = '#7a869a';
Chart.defaults.borderColor = '#2a3045';
Chart.defaults.font.family = "'IBM Plex Mono', monospace";
Chart.defaults.font.size = 11;

const ACCENT   = '#e8c547';
const ACCENT2  = '#5bc8af';
const ACCENT3  = '#e05c7a';
const PURPLE   = '#a78bfa';
const MUTED    = '#7a869a';
const BG_DARK  = '#080b10';

function makeRange(start, end, steps) {
  const arr = [];
  for (let i = 0; i <= steps; i++) arr.push(start + (end - start) * i / steps);
  return arr;
}

// ============================================================
// T7 — SOLOW DIAGRAM
// ============================================================
let solowChart;
function initSolow() {
  const ctx = document.getElementById('chart-solow');
  if (!ctx) return;
  solowChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false,
      responsive: true,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } },
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(3)}` } }
      },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Per capita capital  k', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Per capita output / investment', color: MUTED }, grid: { color: '#1a1f2e' }, min: 0 }
      }
    }
  });
  updateSolow();
}

function updateSolow() {
  const s = parseFloat(document.getElementById('s-solow').value);
  const d = parseFloat(document.getElementById('d-solow').value);
  const n = parseFloat(document.getElementById('n-solow').value);
  const a = parseFloat(document.getElementById('a-solow').value);
  document.getElementById('s-solow-val').textContent = s.toFixed(2);
  document.getElementById('d-solow-val').textContent = d.toFixed(2);
  document.getElementById('n-solow-val').textContent = n.toFixed(3);
  document.getElementById('a-solow-val').textContent = a.toFixed(2);

  const kMax = Math.max(60, Math.pow(s / (d + n), 1/(1-a)) * 2.2);
  const ks = makeRange(0.5, kMax, 120);

  const sfk  = ks.map(k => s * Math.pow(k, a));
  const fk   = ks.map(k => Math.pow(k, a));       // f(k) = k^α (A=1)
  const dnk  = ks.map(k => (d + n) * k);

  const kStar = Math.pow(s / (d + n), 1/(1-a));
  const yStar = Math.pow(kStar, a);

  document.getElementById('kstar-val').textContent = kStar.toFixed(2);
  document.getElementById('ystar-val').textContent = yStar.toFixed(3);
  document.getElementById('dn-val').textContent = (d + n).toFixed(3);

  solowChart.data.labels = ks.map(k => k.toFixed(1));
  solowChart.data.datasets = [
    {
      label: 'f(k) = kᵅ  (production)',
      data: ks.map((k,i) => ({x: k, y: fk[i]})),
      borderColor: MUTED,
      borderDash: [4,4],
      borderWidth: 1.5,
      pointRadius: 0,
      tension: 0.3
    },
    {
      label: 'sf(k)  (savings/investment)',
      data: ks.map((k,i) => ({x: k, y: sfk[i]})),
      borderColor: ACCENT2,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.3,
      fill: false
    },
    {
      label: '(δ+n)k  (depreciation + dilution)',
      data: ks.map((k,i) => ({x: k, y: dnk[i]})),
      borderColor: ACCENT3,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0,
      fill: false
    },
    {
      label: 'k*  (equilibrium)',
      data: [{x: kStar, y: 0}, {x: kStar, y: (d+n)*kStar}],
      borderColor: ACCENT,
      borderDash: [6,3],
      borderWidth: 1.5,
      pointRadius: [0,6],
      pointBackgroundColor: ACCENT,
      pointBorderColor: BG_DARK,
      pointBorderWidth: 2
    }
  ];
  solowChart.update();
}

// ============================================================
// T8 — ROMER GROWTH RATE
// ============================================================
let romerChart;
function initRomer() {
  const ctx = document.getElementById('chart-romer');
  if (!ctx) return;
  romerChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false,
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } },
        tooltip: { callbacks: { label: c => `${c.dataset.label}: ${(c.parsed.y*100).toFixed(2)}%` } }
      },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Spillover parameter  β', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Long-run growth rate  g', color: MUTED }, grid: { color: '#1a1f2e' }, ticks: { callback: v => (v*100).toFixed(1)+'%' } }
      }
    }
  });
  updateRomer();
}

function updateRomer() {
  const a = parseFloat(document.getElementById('a-romer').value);
  const n = parseFloat(document.getElementById('n-romer').value);
  const bCur = parseFloat(document.getElementById('b-romer').value);
  document.getElementById('a-romer-val').textContent = a.toFixed(2);
  document.getElementById('n-romer-val').textContent = n.toFixed(3);
  document.getElementById('b-romer-val').textContent = bCur.toFixed(2);

  const bMax = (1 - a) - 0.01;
  const bs = makeRange(0, bMax, 100);
  const gs = bs.map(b => n*(1-a)/(1-a-b));

  const gCur = n*(1-a)/(1-a-bCur);
  document.getElementById('g-romer-val').textContent = (gCur*100).toFixed(2)+'%';
  document.getElementById('g-solow-val').textContent = (n*100).toFixed(2)+'%';
  document.getElementById('g-mult-val').textContent = (gCur/n).toFixed(2)+'×';

  romerChart.data.datasets = [
    {
      label: 'Romer g = n(1−α)/(1−α−β)',
      data: bs.map((b,i) => ({x:b, y:gs[i]})),
      borderColor: ACCENT2,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.2,
      fill: { target: 'origin', above: 'rgba(91,200,175,0.07)' }
    },
    {
      label: 'Solow benchmark  g = n',
      data: bs.map(b => ({x:b, y:n})),
      borderColor: MUTED,
      borderDash: [5,4],
      borderWidth: 1.5,
      pointRadius: 0
    },
    {
      label: `Current β = ${bCur.toFixed(2)}`,
      data: [{x: bCur, y: 0}, {x: bCur, y: gCur}],
      borderColor: ACCENT,
      borderDash: [4,3],
      borderWidth: 1.5,
      pointRadius: [0, 7],
      pointBackgroundColor: ACCENT,
      pointBorderColor: BG_DARK,
      pointBorderWidth: 2
    }
  ];
  romerChart.update();
}

// ============================================================
// T9 — MULTIPLE EQUILIBRIA / BEST RESPONSE
// ============================================================
let neChart;
function sigmoid(x, steep, mid) {
  return 100 / (1 + Math.exp(-steep * (x - mid) / 100));
}

function initNE() {
  const ctx = document.getElementById('chart-ne');
  if (!ctx) return;
  neChart = new Chart(ctx, {
    type: 'scatter',
    data: { datasets: [] },
    options: {
      animation: false,
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } },
        tooltip: { filter: item => item.datasetIndex >= 2 }
      },
      scales: {
        x: { type: 'linear', min: 0, max: 100, title: { display: true, text: "Player j's action  Yⱼ", color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { type: 'linear', min: 0, max: 100, title: { display: true, text: "Best response  f(Yⱼ)", color: MUTED }, grid: { color: '#1a1f2e' } }
      }
    }
  });
  updateNE();
}

function updateNE() {
  const steep = parseFloat(document.getElementById('steep-ne').value);
  const mid   = parseFloat(document.getElementById('mid-ne').value);
  document.getElementById('steep-ne-val').textContent = steep.toFixed(1);
  document.getElementById('mid-ne-val').textContent   = mid.toFixed(0);

  const xs = makeRange(0, 100, 200);
  const fxs = xs.map(x => sigmoid(x, steep, mid));

  // Find intersections with Y=X numerically
  const intersections = [];
  for (let i = 0; i < xs.length - 1; i++) {
    const diff0 = fxs[i] - xs[i];
    const diff1 = fxs[i+1] - xs[i+1];
    if (diff0 * diff1 <= 0) {
      const xInt = xs[i] - diff0 * (xs[i+1]-xs[i]) / (diff1-diff0);
      const yInt = sigmoid(xInt, steep, mid);
      // Slope of f at intersection
      const slope = steep/100 * yInt * (1 - yInt/100);
      intersections.push({ x: xInt, y: yInt, slope });
    }
  }

  neChart.data.datasets = [
    {
      type: 'line',
      label: '45° line  Yᵢ = Yⱼ',
      data: xs.map(x => ({x, y: x})),
      borderColor: MUTED,
      borderDash: [4,4],
      borderWidth: 1.5,
      pointRadius: 0,
      showLine: true
    },
    {
      type: 'line',
      label: 'Best response  f(Yⱼ)',
      data: xs.map((x,i) => ({x, y: fxs[i]})),
      borderColor: ACCENT2,
      borderWidth: 2.5,
      pointRadius: 0,
      showLine: true,
      tension: 0.3
    },
    ...intersections.map(pt => ({
      type: 'scatter',
      label: pt.slope < 1 ? `Stable NE ≈ ${pt.x.toFixed(0)}` : `Unstable NE ≈ ${pt.x.toFixed(0)}`,
      data: [{ x: pt.x, y: pt.y }],
      pointRadius: 9,
      pointStyle: 'circle',
      backgroundColor: pt.slope < 1 ? ACCENT2 : BG_DARK,
      borderColor: pt.slope < 1 ? ACCENT2 : ACCENT3,
      borderWidth: 2.5
    }))
  ];
  neChart.update();
}

// ============================================================
// T10 — BIG PUSH PROFIT DIAGRAM
// ============================================================
let bpChart;
function initBigPush() {
  const ctx = document.getElementById('chart-bigpush');
  if (!ctx) return;
  bpChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false,
      responsive: true,
      plugins: { legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } } },
      scales: {
        x: { type: 'linear', min: 0, max: 1, title: { display: true, text: 'Fraction of other firms modernizing  λ', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Profit from modernizing  π(λ)', color: MUTED }, grid: { color: '#1a1f2e' } }
      }
    }
  });
  updateBigPush();
}

function updateBigPush() {
  const w   = parseFloat(document.getElementById('w-bp').value);
  const F   = parseFloat(document.getElementById('f-bp').value);
  const LN  = parseFloat(document.getElementById('l-bp').value);
  const c   = 0.5;
  document.getElementById('w-bp-val').textContent = w.toFixed(2);
  document.getElementById('f-bp-val').textContent = F.toFixed(1);
  document.getElementById('l-bp-val').textContent = LN.toFixed(1);

  const lambdas = makeRange(0, 1, 100);

  // Modern firm: L = F + cQ, so Q = (LN - F)/c
  // Revenue: min(Qm, demand(lambda)); demand rises linearly with lambda
  // Simplification: demand = baseDemand + lambda*(maxDemand - baseDemand)
  const Qm = (LN - F) / c;                     // max output
  const Qt = LN;                                // traditional output
  const baseDemand = Qt;
  const maxDemand  = Qm * 1.1;                 // full modernization raises demand ~10% above Qm

  const profits = lambdas.map(lam => {
    const demand = baseDemand + lam * (maxDemand - baseDemand);
    const sold   = Math.min(Qm, demand);
    const wageBill = w * (F + c * sold);
    return sold - wageBill;
  });

  // Zero line
  const zeroLine = lambdas.map(lam => ({x: lam, y: 0}));

  // Determine scenario
  const pi0 = profits[0];   // profit if nobody else modernizes
  const pi1 = profits[100]; // profit if everyone modernizes
  let scenario = '';
  if (pi0 > 0)       scenario = '🟢 W1 — Always profitable to modernize (all firms modernize, NE)';
  else if (pi1 <= 0) scenario = '🔴 W3 — Never profitable, even if all others modernize (poverty trap)';
  else               scenario = '🟡 W2 — Profitable ONLY if enough others modernize (coordination needed)';
  document.getElementById('bp-scenario').textContent = scenario;

  let color = pi0 > 0 ? ACCENT2 : pi1 <= 0 ? ACCENT3 : ACCENT;

  bpChart.data.datasets = [
    {
      label: 'Profit π(λ)',
      data: lambdas.map((lam,i) => ({x: lam, y: profits[i]})),
      borderColor: color,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.2,
      fill: { target: { value: 0 }, above: 'rgba(91,200,175,0.08)', below: 'rgba(224,92,122,0.1)' }
    },
    {
      label: 'Break-even (π = 0)',
      data: zeroLine,
      borderColor: MUTED,
      borderDash: [5,4],
      borderWidth: 1.5,
      pointRadius: 0
    }
  ];
  bpChart.update();
}

// ============================================================
// T11 — O-RING vs ADDITIVE
// ============================================================
let oringChart;
function initORing() {
  const ctx = document.getElementById('chart-oring');
  if (!ctx) return;
  oringChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false,
      responsive: true,
      plugins: { legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } } },
      scales: {
        x: { type: 'linear', min: 0, max: 1, title: { display: true, text: 'Varying worker quality  q₂', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { type: 'linear', min: 0, max: 1.05, title: { display: true, text: 'Total output  F', color: MUTED }, grid: { color: '#1a1f2e' } }
      }
    }
  });
  updateORing();
}

function updateORing() {
  const q1 = parseFloat(document.getElementById('q1-oring').value);
  const N  = parseInt(document.getElementById('n-oring').value);
  document.getElementById('q1-oring-val').textContent = q1.toFixed(2);
  document.getElementById('n-oring-val').textContent  = N;

  const q2s = makeRange(0, 1, 100);

  // O-Ring: q1^(N-1) * q2
  const oring   = q2s.map(q2 => Math.pow(q1, N-1) * q2);
  // Additive normalised: ((N-1)*q1 + q2) / N
  const additive = q2s.map(q2 => ((N-1)*q1 + q2) / N);
  // Vertical gap (shows how much O-Ring punishes low quality)
  const gap = q2s.map((q2,i) => Math.max(0, additive[i] - oring[i]));

  oringChart.data.datasets = [
    {
      label: `O-Ring  F = q₁^${N-1}·q₂`,
      data: q2s.map((q2,i) => ({x: q2, y: oring[i]})),
      borderColor: ACCENT,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.1
    },
    {
      label: `Additive  F = (${N-1}q₁+q₂)/${N}`,
      data: q2s.map((q2,i) => ({x: q2, y: additive[i]})),
      borderColor: ACCENT2,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.1
    },
    {
      label: 'Additive advantage (gap)',
      data: q2s.map((q2,i) => ({x: q2, y: gap[i]})),
      borderColor: 'transparent',
      backgroundColor: 'rgba(224,92,122,0.12)',
      fill: true,
      pointRadius: 0,
      tension: 0.1
    }
  ];
  oringChart.update();
}

// ============================================================
// T12 — DEMOGRAPHIC TRANSITION + POP SOLOW
// ============================================================
let demogChart, popSolowChart;
function initDemog() {
  const ctx1 = document.getElementById('chart-demog');
  const ctx2 = document.getElementById('chart-pop-solow');
  if (!ctx1 || !ctx2) return;

  // Stylised demographic transition
  const stages = makeRange(0, 100, 100);
  function birthRate(t) { return t < 20 ? 40 : t < 50 ? 40 - 0.5*(t-20) : 25 - 0.5*(t-50); }
  function deathRate(t) { return t < 20 ? 38 : t < 40 ? 38 - 1.5*(t-20) : 8; }
  const births = stages.map(birthRate);
  const deaths = stages.map(deathRate);
  const netGrowth = stages.map((t,i) => births[i] - deaths[i]);

  demogChart = new Chart(ctx1, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Birth rate', data: stages.map((t,i)=>({x:t,y:births[i]})), borderColor: ACCENT2, borderWidth:2, pointRadius:0, tension:0.3 },
        { label: 'Death rate', data: stages.map((t,i)=>({x:t,y:deaths[i]})), borderColor: ACCENT3, borderWidth:2, pointRadius:0, tension:0.3 },
        { label: 'Net growth', data: stages.map((t,i)=>({x:t,y:netGrowth[i]})), borderColor: ACCENT, borderWidth:1.5, borderDash:[4,3], pointRadius:0, tension:0.3, fill:{target:'origin', above:'rgba(232,197,71,0.08)'} }
      ]
    },
    options: {
      animation: false, responsive: true,
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 12, padding: 10, font: { size: 10 } } },
        annotation: {}
      },
      scales: {
        x: { type:'linear', min:0, max:100, title:{ display:true, text:'Development stage →', color:MUTED, font:{size:10} }, grid:{color:'#1a1f2e'} },
        y: { title:{ display:true, text:'Rate per 1,000', color:MUTED, font:{size:10} }, grid:{color:'#1a1f2e'} }
      }
    }
  });

  // K* vs n chart
  popSolowChart = new Chart(ctx2, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false, responsive: true,
      plugins: { legend: { position: 'top', labels: { boxWidth: 12, padding: 10, font: { size: 10 } } } },
      scales: {
        x: { type:'linear', title:{ display:true, text:'Population growth rate  n', color:MUTED, font:{size:10} }, grid:{color:'#1a1f2e'}, ticks:{callback: v=>(v*100).toFixed(0)+'%'} },
        y: { title:{ display:true, text:'Steady-state  k*', color:MUTED, font:{size:10} }, grid:{color:'#1a1f2e'} }
      }
    }
  });
  updatePopSolow();
}

function updatePopSolow() {
  const s = parseFloat(document.getElementById('s-pop').value);
  const d = parseFloat(document.getElementById('d-pop').value);
  const a = parseFloat(document.getElementById('a-pop').value);
  document.getElementById('s-pop-val').textContent = s.toFixed(2);
  document.getElementById('d-pop-val').textContent = d.toFixed(2);
  document.getElementById('a-pop-val').textContent = a.toFixed(2);

  if (!popSolowChart) return;
  const ns = makeRange(0.005, 0.08, 80);
  const kStars = ns.map(n => Math.pow(s / (d+n), 1/(1-a)));

  popSolowChart.data.datasets = [
    {
      label: 'k* = (s/(δ+n))^(1/(1−α))',
      data: ns.map((n,i) => ({x:n, y:kStars[i]})),
      borderColor: ACCENT2,
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.3,
      fill: { target: 'origin', above: 'rgba(91,200,175,0.07)' }
    }
  ];
  popSolowChart.update();
}

// ============================================================
// CHART INIT — run after DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initHDI(); initHD(); initLewis();
  initSolow(); initRomer(); initNE(); initBigPush(); initORing(); initDemog();
  initLorenz(); initPovertyChart(); initHT(); initCommons();
  initPM(); initSexRatio(); initAgri(); initGreen();
});
setTimeout(() => {
  if (!hdiChart)    initHDI();
  if (!hdChart)     initHD();
  if (!lewisChart)  initLewis();
  if (!solowChart)   initSolow();
  if (!romerChart)   initRomer();
  if (!neChart)      initNE();
  if (!bpChart)      initBigPush();
  if (!oringChart)   initORing();
  if (!demogChart)   initDemog();
  if (!lorenzChart)  initLorenz();
  if (!povertyChart) initPovertyChart();
  if (!htChart)      initHT();
  if (!commonsChart) initCommons();
  if (!pmChart)      initPM();
  if (!sexRatioChart) initSexRatio();
  if (!agriChart)    initAgri();
  if (!greenChart)   initGreen();
}, 500);

// ============================================================
// T3 — HDI GEOMETRIC VS ARITHMETIC
// ============================================================
let hdiChart;
function initHDI() {
  const ctx = document.getElementById('chart-hdi');
  if (!ctx) return;
  hdiChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Health $I_{Life}$', 'Education $I_{Edu}$', 'Income $I_{Inc}$', 'Old HDI (arith.)', 'New HDI (geom.)'],
      datasets: [{
        label: 'Score',
        data: [0.7, 0.6, 0.5, 0, 0],
        backgroundColor: ['#60a5fa','#60a5fa','#60a5fa','#fbbf24','#e8c547'],
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { min: 0, max: 1, ticks: { color: MUTED }, grid: { color: '#1a1f2e' } }
      }
    }
  });
  updateHDI();
}
function updateHDI() {
  const life = parseFloat(document.getElementById('i-life').value);
  const edu  = parseFloat(document.getElementById('i-edu').value);
  const inc  = parseFloat(document.getElementById('i-inc').value);
  document.getElementById('i-life-val').textContent = life.toFixed(2);
  document.getElementById('i-edu-val').textContent  = edu.toFixed(2);
  document.getElementById('i-inc-val').textContent  = inc.toFixed(2);
  const oldHDI = (life + edu + inc) / 3;
  const newHDI = Math.pow(life * edu * inc, 1/3);
  const diff = oldHDI - newHDI;
  document.getElementById('hdi-new-val').textContent = newHDI.toFixed(3);
  document.getElementById('hdi-old-val').textContent = oldHDI.toFixed(3);
  document.getElementById('hdi-diff-val').textContent = diff.toFixed(3);
  if (hdiChart) {
    hdiChart.data.datasets[0].data = [life, edu, inc, oldHDI, newHDI];
    hdiChart.update();
  }
  renderMathInElement(document.getElementById('notes-3'), {throwOnError:false});
}

// ============================================================
// T5 — HARROD-DOMAR GROWTH MODEL
// ============================================================
let hdChart;
function initHD() {
  const ctx = document.getElementById('chart-hd');
  if (!ctx) return;
  hdChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'g(s) — domestic only', data: [], borderColor: '#e8c547', borderWidth: 2, pointRadius: 0, tension: 0.1 },
        { label: 'g(s) — with foreign inflow f', data: [], borderColor: '#60a5fa', borderWidth: 2, borderDash: [5,3], pointRadius: 0, tension: 0.1 },
        { label: 'g = 0 line', data: [], borderColor: '#4b5563', borderWidth: 1, borderDash: [3,3], pointRadius: 0 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Savings rate  s', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Growth rate  g', color: MUTED }, grid: { color: '#1a1f2e' } }
      }
    }
  });
  updateHD();
}
function updateHD() {
  const c = parseFloat(document.getElementById('c-hd').value);
  const d = parseFloat(document.getElementById('d-hd').value);
  const f = parseFloat(document.getElementById('f-hd').value);
  document.getElementById('c-hd-val').textContent = c.toFixed(1);
  document.getElementById('d-hd-val').textContent = d.toFixed(2);
  document.getElementById('f-hd-val').textContent = f.toFixed(3);
  const ss = makeRange(0, 0.5, 60);
  const gDom  = ss.map(s => ({ x: s, y: s/c - d }));
  const gFor  = ss.map(s => ({ x: s, y: (s+f)/c - d }));
  const gZero = ss.map(s => ({ x: s, y: 0 }));
  const g15 = 0.15/c - d;
  const sReq = (0.05 + d) * c;
  document.getElementById('g-hd-val').textContent = (g15*100).toFixed(2) + '%';
  document.getElementById('s-req-val').textContent = (sReq*100).toFixed(1) + '%';
  if (hdChart) {
    hdChart.data.datasets[0].data = gDom;
    hdChart.data.datasets[1].data = gFor;
    hdChart.data.datasets[2].data = gZero;
    hdChart.update();
  }
}

// ============================================================
// T6 — LEWIS TWO-SECTOR MODEL
// ============================================================
let lewisChart;
function initLewis() {
  const ctx = document.getElementById('chart-lewis');
  if (!ctx) return;
  lewisChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'MPL in Manufacturing', data: [], borderColor: '#e8c547', borderWidth: 2.5, pointRadius: 0, tension: 0.3 },
        { label: 'Agricultural wage floor wA', data: [], borderColor: '#f87171', borderWidth: 1.5, borderDash: [6,3], pointRadius: 0 },
        { label: 'Urban wage premium (wM − wA)', data: [], borderColor: '#34d399', borderWidth: 0, fill: 'origin', backgroundColor: 'rgba(52,211,153,0.15)', pointRadius: 0 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Capital stock  K', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Wage / MPL', color: MUTED }, min: 0, grid: { color: '#1a1f2e' } }
      }
    }
  });
  updateLewis();
}
function updateLewis() {
  const wA = parseFloat(document.getElementById('wa-lewis').value);
  const LM = parseFloat(document.getElementById('lm-lewis').value);
  const s  = parseFloat(document.getElementById('s-lewis').value);
  document.getElementById('wa-lewis-val').textContent = wA.toFixed(2);
  document.getElementById('lm-lewis-val').textContent = LM.toFixed(0);
  document.getElementById('s-lewis-val').textContent  = s.toFixed(2);
  // MPL_M = 0.7 * A * K^0.3 / LM  (Cobb-Douglas Y = A*K^0.3*L^0.7)
  const A = 3;
  const Ks = makeRange(10, 300, 80);
  const mpl  = Ks.map(K => ({ x: K, y: 0.7 * A * Math.pow(K, 0.3) / LM }));
  const floor = Ks.map(K => ({ x: K, y: wA }));
  const premium = Ks.map(K => ({ x: K, y: Math.max(0, 0.7 * A * Math.pow(K, 0.3) / LM - wA) }));
  const currentMPL = 0.7 * A * Math.pow(100, 0.3) / LM;
  const pressure = currentMPL > wA ? `High (wM=${currentMPL.toFixed(2)} > wA=${wA.toFixed(2)})` : `Low (wM=${currentMPL.toFixed(2)} < wA=${wA.toFixed(2)})`;
  document.getElementById('wm-lewis-val-out').textContent = currentMPL.toFixed(2);
  document.getElementById('migration-pressure').textContent = pressure;
  if (lewisChart) {
    lewisChart.data.datasets[0].data = mpl;
    lewisChart.data.datasets[1].data = floor;
    lewisChart.data.datasets[2].data = premium;
    lewisChart.update();
  }
}

// ============================================================
// T13 — LORENZ CURVE & GINI
// ============================================================
let lorenzChart;
function makeLorenz(ineq) {
  // Parameterise with a power-law Lorenz: L(x) = x^(1/(1-ineq))
  const exp = 1 / (1 - ineq * 0.95 + 0.001);
  const xs = makeRange(0, 1, 100);
  return { xs, ys: xs.map(x => Math.pow(x, exp)), exp };
}

function initLorenz() {
  const ctx = document.getElementById('chart-lorenz');
  if (!ctx) return;
  lorenzChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false, responsive: true,
      plugins: { legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } } },
      scales: {
        x: { type:'linear', min:0, max:1, title:{ display:true, text:'Cumulative population share', color:MUTED }, grid:{color:'#1a1f2e'} },
        y: { type:'linear', min:0, max:1, title:{ display:true, text:'Cumulative income share', color:MUTED }, grid:{color:'#1a1f2e'} }
      }
    }
  });
  updateLorenz();
}

function updateLorenz() {
  const ineq = parseFloat(document.getElementById('ineq-lorenz').value);
  document.getElementById('ineq-lorenz-val').textContent = ineq.toFixed(2);
  const { xs, ys } = makeLorenz(ineq);

  // Gini = 1 - 2 * integral of L(x) dx ≈ 1 - 2 * trapezoid sum
  let area = 0;
  for (let i = 1; i < xs.length; i++) area += 0.5*(ys[i]+ys[i-1])*(xs[i]-xs[i-1]);
  const gini = (1 - 2*area).toFixed(3);

  // Approximate Kuznets Ratio from the curve
  const bot40 = ys[40];  // L(0.4)
  const top20 = 1 - ys[80]; // 1 - L(0.8)
  const kr = bot40 > 0 ? (top20/bot40).toFixed(2) : '∞';

  document.getElementById('gini-val').textContent = gini;
  document.getElementById('kr-val').textContent = kr;

  lorenzChart.data.datasets = [
    { label: 'Line of Equality', data: xs.map(x=>({x,y:x})), borderColor: MUTED, borderDash:[4,4], borderWidth:1.5, pointRadius:0 },
    {
      label: 'Lorenz Curve',
      data: xs.map((x,i)=>({x,y:ys[i]})),
      borderColor: ACCENT2, borderWidth:2.5, pointRadius:0, tension:0.1,
      fill: { target: '-1', below: 'rgba(224,92,122,0.15)' }
    }
  ];
  lorenzChart.update();
}

// ============================================================
// T14 — POVERTY GAP VISUALIZER
// ============================================================
let povertyChart;
const POV_INCOMES = [0.5, 1.5, 2.5, 3.5, 4.5, 6, 7.5, 9];

function initPovertyChart() {
  const ctx = document.getElementById('chart-poverty');
  if (!ctx) return;
  povertyChart = new Chart(ctx, {
    type: 'bar',
    data: { datasets: [] },
    options: {
      animation: false, responsive: true,
      plugins: {
        legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } },
        tooltip: { callbacks: { label: c => `Income: ${c.raw}` } }
      },
      scales: {
        x: { title:{ display:true, text:'Individual (ordered by income)', color:MUTED }, grid:{color:'#1a1f2e'} },
        y: { title:{ display:true, text:'Income', color:MUTED }, grid:{color:'#1a1f2e'}, min:0, max:11 }
      }
    }
  });
  updatePoverty();
}

function updatePoverty() {
  const yp = parseFloat(document.getElementById('yp-pov').value);
  document.getElementById('yp-pov-val').textContent = yp.toFixed(1);
  const N = POV_INCOMES.length;
  const poor = POV_INCOMES.filter(y => y < yp);
  const H = poor.length, HI = (H/N).toFixed(2);
  const TPG = poor.reduce((s,y) => s+(yp-y), 0).toFixed(2);
  const APG = (TPG/N).toFixed(2);
  const AIS = H>0 ? (TPG/H).toFixed(2) : '—';
  const NIS = H>0 ? (AIS/yp).toFixed(3) : '—';

  document.getElementById('H-val').textContent = H;
  document.getElementById('HI-val').textContent = HI;
  document.getElementById('TPG-val').textContent = TPG;
  document.getElementById('APG-val').textContent = APG;
  document.getElementById('NIS-val').textContent = NIS;

  // bars: income (green if above line, red segment if below)
  const incomeData = POV_INCOMES.map(y => Math.min(y, yp));
  const gapData = POV_INCOMES.map(y => Math.max(0, yp - y));

  povertyChart.data.labels = POV_INCOMES.map((y,i) => `P${i+1}`);
  povertyChart.data.datasets = [
    {
      label: 'Income', data: incomeData,
      backgroundColor: POV_INCOMES.map(y => y < yp ? 'rgba(224,92,122,0.7)' : 'rgba(91,200,175,0.7)'),
      borderColor: POV_INCOMES.map(y => y < yp ? ACCENT3 : ACCENT2),
      borderWidth: 1
    },
    {
      label: 'Poverty Gap (shortfall)',
      data: gapData,
      backgroundColor: 'rgba(232,197,71,0.25)',
      borderColor: ACCENT,
      borderWidth: 1.5,
      borderDash: [4,3]
    },
    {
      type: 'line',
      label: `Poverty line Y_p = ${yp}`,
      data: POV_INCOMES.map(() => yp),
      borderColor: ACCENT,
      borderWidth: 2,
      borderDash: [6,3],
      pointRadius: 0
    }
  ];
  povertyChart.update();
}

// ============================================================
// T16 — HARRIS-TODARO
// ============================================================
let htChart;
function initHT() {
  const ctx = document.getElementById('chart-ht');
  if (!ctx) return;
  htChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false, responsive: true,
      plugins: { legend:{ position:'top', labels:{ boxWidth:14, padding:16 } } },
      scales: {
        x: { type:'linear', title:{ display:true, text:'Urban labor supply  L_US', color:MUTED }, grid:{color:'#1a1f2e'} },
        y: { title:{ display:true, text:'Wage', color:MUTED }, grid:{color:'#1a1f2e'}, min:0 }
      }
    }
  });
  updateHT();
}

function updateHT() {
  const wm = parseFloat(document.getElementById('wm-ht').value);
  const lm = parseFloat(document.getElementById('lm-ht').value);
  const wa = parseFloat(document.getElementById('wa-ht').value);
  document.getElementById('wm-ht-val').textContent = wm.toFixed(1);
  document.getElementById('lm-ht-val').textContent = lm;
  document.getElementById('wa-ht-val').textContent = wa.toFixed(1);

  const lusMax = lm * wm / wa * 1.4;
  const luss = makeRange(lm, lusMax, 100);
  const expWage = luss.map(l => lm * wm / l);

  const lusStar = lm * wm / wa;
  const unemp = (lusStar - lm).toFixed(1);
  const urate = ((1 - wa/wm)*100).toFixed(1);

  document.getElementById('lus-val').textContent = lusStar.toFixed(1);
  document.getElementById('unemp-val').textContent = unemp;
  document.getElementById('urate-val').textContent = urate + '%';

  htChart.data.datasets = [
    {
      label: 'Expected urban wage  (L_M/L_US)·W̄_M',
      data: luss.map((l,i)=>({x:l, y:expWage[i]})),
      borderColor: ACCENT2, borderWidth:2.5, pointRadius:0, tension:0.2
    },
    {
      label: 'Agricultural wage  W_A',
      data: luss.map(l=>({x:l, y:wa})),
      borderColor: MUTED, borderDash:[5,4], borderWidth:1.5, pointRadius:0
    },
    {
      label: 'Manufacturing wage  W̄_M',
      data: luss.map(l=>({x:l, y:wm})),
      borderColor: ACCENT3, borderDash:[4,3], borderWidth:1.5, pointRadius:0
    },
    {
      label: `Equilibrium L*_US = ${lusStar.toFixed(0)}`,
      data: [{x:lusStar,y:0},{x:lusStar,y:wa}],
      borderColor: ACCENT, borderDash:[6,3], borderWidth:1.5,
      pointRadius:[0,7], pointBackgroundColor:ACCENT, pointBorderColor:BG_DARK, pointBorderWidth:2
    }
  ];
  htChart.update();
}

// ============================================================
// T18 — TRAGEDY OF THE COMMONS
// ============================================================
let commonsChart;
function initCommons() {
  const ctx = document.getElementById('chart-commons');
  if (!ctx) return;
  commonsChart = new Chart(ctx, {
    type: 'line',
    data: { datasets: [] },
    options: {
      animation: false, responsive: true,
      plugins: { legend:{ position:'top', labels:{ boxWidth:14, padding:16 } } },
      scales: {
        x: { type:'linear', title:{ display:true, text:'Number of fishermen  L', color:MUTED }, grid:{color:'#1a1f2e'}, min:0 },
        y: { title:{ display:true, text:'Product per worker', color:MUTED }, grid:{color:'#1a1f2e'}, min:0 }
      }
    }
  });
  updateCommons();
}

function updateCommons() {
  const w = parseFloat(document.getElementById('w-commons').value);
  const A = parseFloat(document.getElementById('a-commons').value);
  document.getElementById('w-commons-val').textContent = w.toFixed(1);
  document.getElementById('a-commons-val').textContent = A;

  // f(L) = A * sqrt(L); MP = A/(2*sqrt(L)); AP = A/sqrt(L)
  const lStar = Math.pow(A/(2*w), 2);
  const lC    = Math.pow(A/w, 2);
  const lMax  = lC * 1.4;
  const ls = makeRange(0.1, lMax, 120);

  const mp = ls.map(l => A / (2*Math.sqrt(l)));
  const ap = ls.map(l => A / Math.sqrt(l));

  document.getElementById('lstar-commons').textContent = lStar.toFixed(1);
  document.getElementById('lc-commons').textContent    = lC.toFixed(1);
  document.getElementById('over-commons').textContent  = (lC/lStar).toFixed(1) + '×';

  commonsChart.data.datasets = [
    {
      label: 'MP_L = A/(2√L)  (owner hires here)',
      data: ls.map((l,i)=>({x:l, y:mp[i]})),
      borderColor: ACCENT2, borderWidth:2.5, pointRadius:0, tension:0.1
    },
    {
      label: 'AP_L = A/√L  (open-access stops here)',
      data: ls.map((l,i)=>({x:l, y:ap[i]})),
      borderColor: ACCENT3, borderWidth:2.5, pointRadius:0, tension:0.1
    },
    {
      label: `Outside wage w = ${w}`,
      data: ls.map(l=>({x:l, y:w})),
      borderColor: MUTED, borderDash:[5,4], borderWidth:1.5, pointRadius:0
    },
    {
      label: `L* = ${lStar.toFixed(1)} (optimal)`,
      data: [{x:lStar,y:0},{x:lStar,y:w}],
      borderColor: ACCENT2, borderDash:[5,3], borderWidth:1.5,
      pointRadius:[0,7], pointBackgroundColor:ACCENT2, pointBorderColor:BG_DARK, pointBorderWidth:2
    },
    {
      label: `L_C = ${lC.toFixed(1)} (over-use)`,
      data: [{x:lC,y:0},{x:lC,y:w}],
      borderColor: ACCENT3, borderDash:[5,3], borderWidth:1.5,
      pointRadius:[0,7], pointBackgroundColor:ACCENT3, pointBorderColor:BG_DARK, pointBorderWidth:2
    }
  ];
  commonsChart.update();
}

// ============================================================
// T19 — PM2.5 HEALTH DOSE-RESPONSE
// ============================================================
let pmChart;
function initPM() {
  const ctx = document.getElementById('chart-pm');
  if (!ctx) return;
  pmChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Health cost (log-linear)', data: [], borderColor: ACCENT, borderWidth: 2.5, pointRadius: 0, tension: 0.3, fill: 'origin', backgroundColor: 'rgba(232,197,71,0.08)' },
        { label: 'WHO guideline', data: [], borderColor: ACCENT2, borderWidth: 1.5, borderDash: [5,3], pointRadius: 0 },
        { label: 'Delhi avg (100)', data: [], borderColor: ACCENT3, borderWidth: 1.5, borderDash: [5,3], pointRadius: 0 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'PM2.5 concentration (μg/m³)', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Relative health cost', color: MUTED }, grid: { color: '#1a1f2e' }, min: 0 }
      }
    }
  });
  updatePM();
}
function updatePM() {
  const beta = parseFloat(document.getElementById('pm-beta').value);
  const limit = parseFloat(document.getElementById('pm-limit').value);
  document.getElementById('pm-beta-val').textContent = beta.toFixed(1);
  document.getElementById('pm-limit-val').textContent = limit.toFixed(0);
  const xs = makeRange(1, 150, 100);
  const cost = xs.map(x => ({ x, y: beta * Math.log(x) }));
  const maxCost = beta * Math.log(150);
  const whoLine = xs.map(x => ({ x, y: beta * Math.log(limit) }));
  const delhiLine = xs.map(x => ({ x, y: beta * Math.log(100) }));
  const whoVal = beta * Math.log(limit);
  const delhiVal = beta * Math.log(100);
  document.getElementById('pm-who-val').textContent = whoVal.toFixed(2);
  document.getElementById('pm-delhi-val').textContent = delhiVal.toFixed(2);
  document.getElementById('pm-ratio-val').textContent = (delhiVal / whoVal).toFixed(1) + 'x';
  if (pmChart) {
    pmChart.data.datasets[0].data = cost;
    pmChart.data.datasets[1].data = whoLine;
    pmChart.data.datasets[2].data = delhiLine;
    pmChart.update();
  }
}

// ============================================================
// T20 — SEX RATIO BY AGE
// ============================================================
let sexRatioChart;
const AGE_LABELS = ['Birth','0-14','15-24','25-54','55-64','65+'];
function sexRatioNormal(mort) {
  return [1.06, 1.055, 1.04, 1.01, 1.0, 0.78 + mort * 5];
}
function sexRatioSkewed(pref, mort) {
  const base = 1.06 + pref;
  return [base, base * 0.995, base * 0.985, base * 0.97, base * 0.96, (0.78 + mort * 5) * (1 + pref * 0.3)];
}
function initSexRatio() {
  const ctx = document.getElementById('chart-sexratio');
  if (!ctx) return;
  sexRatioChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: AGE_LABELS,
      datasets: [
        { label: 'Normal (Switzerland-like)', data: [], borderColor: ACCENT2, borderWidth: 2, pointRadius: 4, tension: 0.3 },
        { label: 'Skewed (son preference)', data: [], borderColor: ACCENT3, borderWidth: 2, pointRadius: 4, tension: 0.3, borderDash: [5,3] },
        { label: 'Fischer equilibrium (1.0)', data: [], borderColor: '#4b5563', borderWidth: 1, borderDash: [3,3], pointRadius: 0 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Males per female', color: MUTED }, grid: { color: '#1a1f2e' }, min: 0.7, max: 1.4 }
      }
    }
  });
  updateSexRatio();
}
function updateSexRatio() {
  const pref = parseFloat(document.getElementById('sr-pref').value);
  const mort = parseFloat(document.getElementById('sr-mort').value);
  document.getElementById('sr-pref-val').textContent = pref.toFixed(2);
  document.getElementById('sr-mort-val').textContent = mort.toFixed(3);
  const birthRatio = (1.06 + pref).toFixed(2);
  const missing = ((pref / (1.06 + pref)) * 100).toFixed(1);
  document.getElementById('sr-birth-val').textContent = birthRatio;
  document.getElementById('sr-missing-val').textContent = missing + '%';
  if (sexRatioChart) {
    sexRatioChart.data.datasets[0].data = sexRatioNormal(mort);
    sexRatioChart.data.datasets[1].data = sexRatioSkewed(pref, mort);
    sexRatioChart.data.datasets[2].data = AGE_LABELS.map(() => 1.0);
    sexRatioChart.update();
  }
}

// ============================================================
// T21 — STRUCTURAL TRANSFORMATION
// ============================================================
let agriChart;
function initAgri() {
  const ctx = document.getElementById('chart-agri');
  if (!ctx) return;
  agriChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Ag share of GDP (%)', data: [], borderColor: ACCENT, borderWidth: 2.5, pointRadius: 0, tension: 0.3, fill: 'origin', backgroundColor: 'rgba(134,239,172,0.08)' },
        { label: 'Historical LIC avg', data: [], borderColor: ACCENT2, borderWidth: 1.5, borderDash: [5,3], pointRadius: 0 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Per capita GNI (USD thousands)', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Agriculture share of GDP (%)', color: MUTED }, grid: { color: '#1a1f2e' }, min: 0, max: 85 }
      }
    }
  });
  updateAgri();
}
function updateAgri() {
  const speed = parseFloat(document.getElementById('agri-speed').value);
  const start = parseFloat(document.getElementById('agri-start').value);
  const floor = parseFloat(document.getElementById('agri-floor').value);
  document.getElementById('agri-speed-val').textContent = speed.toFixed(1);
  document.getElementById('agri-start-val').textContent = start.toFixed(0);
  document.getElementById('agri-floor-val').textContent = floor.toFixed(1);
  const xs = makeRange(0.5, 60, 100);
  const share = xs.map(x => ({ x, y: Math.max(floor, start * Math.exp(-speed * 0.05 * x)) }));
  const historical = xs.map(x => ({ x, y: Math.max(2, 55 * Math.exp(-0.075 * x)) }));
  const v5k = Math.max(floor, start * Math.exp(-speed * 0.05 * 5));
  const v20k = Math.max(floor, start * Math.exp(-speed * 0.05 * 20));
  document.getElementById('agri-5k').textContent = v5k.toFixed(1) + '%';
  document.getElementById('agri-20k').textContent = v20k.toFixed(1) + '%';
  if (agriChart) {
    agriChart.data.datasets[0].data = share;
    agriChart.data.datasets[1].data = historical;
    agriChart.update();
  }
}

// ============================================================
// T22 — GREEN REVOLUTION YIELD RESPONSE
// ============================================================
let greenChart;
function initGreen() {
  const ctx = document.getElementById('chart-green');
  if (!ctx) return;
  greenChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        { label: 'Traditional variety (expected yield)', data: [], borderColor: ACCENT2, borderWidth: 2, pointRadius: 0, tension: 0.3 },
        { label: 'HYV expected yield', data: [], borderColor: ACCENT, borderWidth: 2.5, pointRadius: 0, tension: 0.3 },
        { label: 'HYV lower bound (bad year)', data: [], borderColor: ACCENT3, borderWidth: 1.5, borderDash: [5,3], pointRadius: 0, fill: '-1', backgroundColor: 'rgba(224,92,122,0.08)' },
        { label: 'Subsistence minimum', data: [], borderColor: '#6b7280', borderWidth: 1, borderDash: [3,3], pointRadius: 0 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: { legend: { labels: { color: MUTED, font: { size: 11 } } } },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Input level (fertiliser + irrigation index)', color: MUTED }, grid: { color: '#1a1f2e' } },
        y: { title: { display: true, text: 'Yield (tons/hectare)', color: MUTED }, grid: { color: '#1a1f2e' }, min: 0 }
      }
    }
  });
  updateGreen();
}
function updateGreen() {
  const boost = parseFloat(document.getElementById('gr-boost').value);
  const risk = parseFloat(document.getElementById('gr-risk').value);
  const sub = parseFloat(document.getElementById('gr-sub').value);
  document.getElementById('gr-boost-val').textContent = boost.toFixed(1);
  document.getElementById('gr-risk-val').textContent = risk.toFixed(1);
  document.getElementById('gr-sub-val').textContent = sub.toFixed(1);
  const xs = makeRange(0, 10, 80);
  const trad = xs.map(x => ({ x, y: 0.5 + 0.3 * Math.sqrt(x) }));
  const hyv = xs.map(x => ({ x, y: boost * (0.3 + 0.35 * Math.sqrt(x)) }));
  const hyvLow = xs.map(x => ({ x, y: Math.max(0, boost * (0.3 + 0.35 * Math.sqrt(x)) - risk * 0.5) }));
  const subLine = xs.map(x => ({ x, y: sub }));
  const lowInp = boost * (0.3 + 0.35 * Math.sqrt(1));
  const highInp = boost * (0.3 + 0.35 * Math.sqrt(8));
  document.getElementById('gr-low-val').textContent = lowInp.toFixed(2) + ' t/ha';
  document.getElementById('gr-high-val').textContent = highInp.toFixed(2) + ' t/ha';
  if (greenChart) {
    greenChart.data.datasets[0].data = trad;
    greenChart.data.datasets[1].data = hyv;
    greenChart.data.datasets[2].data = hyvLow;
    greenChart.data.datasets[3].data = subLine;
    greenChart.update();
  }
}
