import type { GapCardProps } from "@/components/GapCard";

export interface SessionSection {
  title: string;
  consciousCount: number;
  unconsciousCount: number;
  gaps: GapCardProps[];
}

export interface SessionData {
  id: string;
  subject: string;
  year: string;
  title: string;
  recordedDate: string;
  focusScore: string;
  unconsciousGaps: number;
  totalConscious: number;
  totalUnconscious: number;
  sections: SessionSection[];
  sectionNames: string[];
}

export const sessions: SessionData[] = [
  {
    id: "1",
    subject: "NEUROSCIENCE",
    year: "2025",
    title: "Synaptic Consolidation & Long-Term Potentiation in Hippocampal Networks",
    recordedDate: "03/28",
    focusScore: "87%",
    unconsciousGaps: 6,
    totalConscious: 5,
    totalUnconscious: 6,
    sectionNames: ["Introduction", "Mechanisms", "Experimental Results", "Discussion"],
    sections: [
      {
        title: "Introduction",
        consciousCount: 2,
        unconsciousCount: 1,
        gaps: [
          {
            type: "conscious",
            quote: "The remodeling of dendritic spines serves as a physical substrate for learning. This dynamic process involves the swift assembly of actin filaments within seconds of stimulation.",
            highlightText: "remodeling of dendritic spines",
            aiSimplification: "How neurons physically reshape their connection points to store new information, like building new bridges between brain cells.",
          },
          {
            type: "conscious",
            quote: "Long-term potentiation requires the coordinated activation of NMDA receptors and the subsequent influx of calcium ions into the postsynaptic density.",
            highlightText: "NMDA receptors",
            aiSimplification: "Special locks on brain cells that only open when a signal is strong enough — once open, they let calcium rush in to strengthen the connection.",
          },
          {
            type: "unconscious",
            quote: "Calcium-calmodulin-dependent protein kinase II (CaMKII) acts as a molecular switch sustaining changes in synaptic strength even after the initial stimulus has ceased.",
            highlightText: "a molecular switch sus",
            aiSimplification: "CaMKII is like a light switch that stays on — once flipped by a learning event, it keeps the connection strong without needing the original signal.",
            focusDropNote: "Focus drop detected at 02:44m mark. Cognitive load exceeded threshold during 'molecular switch' explanation.",
          },
        ],
      },
      {
        title: "Mechanisms",
        consciousCount: 2,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "Protein synthesis-dependent late-phase LTP requires activation of the MAPK/ERK signaling cascade and downstream transcription factor CREB phosphorylation.",
            highlightText: "MAPK/ERK signaling cascade",
            aiSimplification: "A chain reaction inside the cell that tells the nucleus to make new proteins — these new proteins physically build stronger, longer-lasting connections.",
          },
          {
            type: "unconscious",
            quote: "Heterosynaptic plasticity allows non-stimulated synapses to undergo metaplastic changes through astrocyte-mediated glutamate spillover and retrograde endocannabinoid signaling.",
            highlightText: "astrocyte-mediated glutamate spillover",
            aiSimplification: "Nearby synapses that weren't directly stimulated can still change because support cells leak signaling chemicals to neighboring connections.",
            focusDropNote: "Focus drop detected at 14:22m mark. Dense terminology cluster — 3 technical terms in a single sentence triggered cognitive overload.",
          },
          {
            type: "conscious",
            quote: "The synaptic tagging and capture hypothesis proposes that weak stimulation sets a local tag while strong stimulation provides plasticity-related proteins captured by tagged synapses.",
            highlightText: "synaptic tagging and capture",
            aiSimplification: "Weak signals bookmark a synapse. Strong signals create building materials. The bookmarked synapses grab those materials to become permanently stronger.",
          },
          {
            type: "unconscious",
            quote: "Bhatt et al. demonstrated that dendritic mRNA transport granules containing Arc/Arg3.1 are selectively targeted to recently potentiated spines via local proteasomal degradation of RISC complexes.",
            highlightText: "dendritic mRNA transport granules",
            aiSimplification: "Tiny molecular delivery trucks carry protein blueprints to the exact synapses that need strengthening, guided by cleanup signals at the right spots.",
            focusDropNote: "Focus drop detected at 19:51m mark. Extended paragraph with multiple citation references caused attention drift.",
          },
        ],
      },
      {
        title: "Experimental Results",
        consciousCount: 1,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "Two-photon imaging revealed that spine volume increases of 200-300% occurred within 2 minutes of high-frequency stimulation and persisted for the duration of the 90-minute recording session.",
            highlightText: "Two-photon imaging",
            aiSimplification: "Using a special microscope that can see inside living brain tissue, researchers watched connection points triple in size within minutes and stay enlarged.",
          },
          {
            type: "unconscious",
            quote: "The coefficient of variation for EPSP amplitude decreased from 0.43±0.07 to 0.21±0.04 post-tetanization, suggesting a transition from predominantly presynaptic to postsynaptic expression of potentiation.",
            highlightText: "coefficient of variation for EPSP amplitude",
            aiSimplification: "Signal variability dropped by half after stimulation, meaning the receiving side of the connection became more reliable rather than the sending side just getting louder.",
            focusDropNote: "Focus drop detected at 31:15m mark. Statistical analysis section with dense numerical data caused sustained attention loss over 45 seconds.",
          },
          {
            type: "unconscious",
            quote: "Bhatt et al. computed the Fano factor across 200 sequential stimulation trials, revealing a non-stationary Poisson process underlying vesicle release probability modulation at the Schaffer collateral-CA1 synapse.",
            highlightText: "non-stationary Poisson process",
            aiSimplification: "The randomness of chemical signal release changes over time — it's not fixed, but shifts predictably as the connection learns.",
            focusDropNote: "Focus drop detected at 33:02m mark. Complex statistical methodology combined with specialized anatomical terminology.",
          },
        ],
      },
      {
        title: "Discussion",
        consciousCount: 0,
        unconsciousCount: 1,
        gaps: [
          {
            type: "unconscious",
            quote: "These findings support the complementary learning systems framework wherein hippocampal rapid encoding interfaces with neocortical slow consolidation through coordinated sharp-wave ripple–spindle coupling during NREM sleep.",
            highlightText: "sharp-wave ripple–spindle coupling",
            aiSimplification: "The brain has two learning speeds: fast (hippocampus) and slow (cortex). During deep sleep, they sync up through specific brain wave patterns to transfer memories permanently.",
            focusDropNote: "Focus drop detected at 41:30m mark. End-of-session fatigue — reading duration exceeded optimal 40-minute window identified in prior sessions.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    subject: "COMPUTER SCIENCE",
    year: "2025",
    title: "Attention Mechanisms in Transformer Architectures: A Deep Dive",
    recordedDate: "04/02",
    focusScore: "74%",
    unconsciousGaps: 11,
    totalConscious: 7,
    totalUnconscious: 11,
    sectionNames: ["Introduction", "Self-Attention", "Multi-Head Attention", "Optimization"],
    sections: [
      {
        title: "Introduction",
        consciousCount: 2,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "The scaled dot-product attention computes compatibility functions between queries and keys, dividing by the square root of the dimension to prevent softmax saturation in high-dimensional spaces.",
            highlightText: "softmax saturation",
            aiSimplification: "When numbers get too big, the ranking function pushes everything to extremes (all-or-nothing). Dividing by the dimension size keeps the values moderate and useful.",
          },
          {
            type: "unconscious",
            quote: "Vaswani et al. demonstrated that positional encodings using sinusoidal functions of varying frequencies allow the model to extrapolate to sequence lengths unseen during training through relative position inference.",
            highlightText: "sinusoidal functions of varying frequencies",
            aiSimplification: "The model uses wave patterns at different speeds to encode word positions — like musical notes that let it figure out relative distances even for longer texts.",
            focusDropNote: "Focus drop detected at 05:12m mark. Mathematical notation density exceeded threshold during positional encoding derivation.",
          },
          {
            type: "conscious",
            quote: "The attention mechanism replaces recurrent processing with parallelizable matrix operations, reducing the sequential computation bottleneck from O(n) to O(1) depth with O(n²) total operations.",
            highlightText: "O(n²) total operations",
            aiSimplification: "Instead of reading words one by one (slow but cheap), attention looks at all word pairs simultaneously (fast but memory-expensive — cost grows with the square of text length).",
          },
          {
            type: "unconscious",
            quote: "Residual connections combined with layer normalization enable gradient flow through deep transformer stacks by maintaining a direct additive pathway for information propagation across 96+ layers.",
            highlightText: "additive pathway for information",
            aiSimplification: "Skip connections act like express elevators — information can bypass floors without getting degraded, allowing very deep models to still train effectively.",
            focusDropNote: "Focus drop detected at 08:45m mark. Gradient flow analysis triggered cognitive overload with backpropagation math.",
          },
          {
            type: "unconscious",
            quote: "The computational complexity of self-attention scales quadratically with sequence length, motivating sparse attention variants like Longformer's sliding window and global attention hybrid approach.",
            highlightText: "sparse attention variants",
            aiSimplification: "Full attention is too expensive for long texts. Sparse methods only look at nearby words plus a few important global anchors — like skimming a book but always checking chapter headings.",
            focusDropNote: "Focus drop detected at 11:30m mark. Extended comparison of 5 different sparse attention architectures caused attention fatigue.",
          },
        ],
      },
      {
        title: "Self-Attention",
        consciousCount: 2,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "Each token generates a query, key, and value vector through learned linear projections. The query-key dot product determines how much each position attends to every other position in the sequence.",
            highlightText: "query, key, and value vector",
            aiSimplification: "Each word creates three versions of itself: 'what am I looking for?' (query), 'what do I contain?' (key), and 'what information do I share?' (value). Matching queries to keys determines information flow.",
          },
          {
            type: "unconscious",
            quote: "Causal masking in autoregressive transformers sets future-position attention weights to negative infinity before softmax, ensuring the model cannot attend to tokens that have not yet been generated.",
            highlightText: "future-position attention weights to negative infinity",
            aiSimplification: "During text generation, the model is forced to only look backward — future positions are blocked by setting their scores to 'impossible,' preventing cheating by peeking ahead.",
            focusDropNote: "Focus drop detected at 16:20m mark. Masking matrix visualization with negative infinity values caused confusion.",
          },
          {
            type: "conscious",
            quote: "Attention heads often specialize: some track syntactic dependencies (subject-verb agreement across clauses), while others capture semantic relationships (coreference resolution between pronouns and antecedents).",
            highlightText: "syntactic dependencies",
            aiSimplification: "Different attention heads learn different jobs — some track grammar rules (like matching subjects to verbs), while others track meaning (like knowing 'she' refers to 'Alice').",
          },
          {
            type: "unconscious",
            quote: "The attention entropy — measured as the Shannon entropy of the softmax distribution — varies dramatically across layers, with early layers showing near-uniform attention and deeper layers exhibiting sharp, peaked distributions.",
            highlightText: "Shannon entropy of the softmax distribution",
            aiSimplification: "Early layers spread attention evenly (looking everywhere), while later layers focus sharply on specific words — like going from a wide-angle lens to a telephoto zoom.",
            focusDropNote: "Focus drop detected at 21:05m mark. Information theory metrics applied to attention patterns exceeded familiarity threshold.",
          },
          {
            type: "unconscious",
            quote: "Linear attention approximations replace the softmax kernel with feature maps φ(q)·φ(k)ᵀ, enabling O(n) complexity but sacrificing the sharp selection behavior that softmax provides through its exponential non-linearity.",
            highlightText: "feature maps φ(q)·φ(k)ᵀ",
            aiSimplification: "A faster alternative replaces the exponential ranking with simpler math, cutting cost from n² to n — but it's like replacing a spotlight with a floodlight: faster but less precise.",
            focusDropNote: "Focus drop detected at 24:40m mark. Kernel method derivation with Greek notation triggered sustained attention loss.",
          },
        ],
      },
      {
        title: "Multi-Head Attention",
        consciousCount: 2,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "Multi-head attention runs h parallel attention functions, each with dimension d_model/h, then concatenates and linearly projects the results. This allows the model to jointly attend to information from different representation subspaces.",
            highlightText: "different representation subspaces",
            aiSimplification: "Instead of one attention mechanism, the model runs several in parallel — each looking for different patterns — then combines their findings. It's like having multiple experts read the same text for different insights.",
          },
          {
            type: "unconscious",
            quote: "Michel et al. showed that pruning up to 40% of attention heads at inference time causes less than 1% performance degradation, suggesting significant redundancy in the multi-head architecture.",
            highlightText: "pruning up to 40% of attention heads",
            aiSimplification: "Nearly half the attention heads can be removed without hurting performance, meaning many heads learn overlapping or unnecessary patterns — the architecture has built-in backup redundancy.",
            focusDropNote: "Focus drop detected at 29:10m mark. Ablation study metrics and pruning threshold analysis caused cognitive fatigue.",
          },
          {
            type: "conscious",
            quote: "Cross-attention in encoder-decoder models allows decoder queries to attend to encoder key-value pairs, effectively creating a differentiable soft lookup between the output being generated and the full input representation.",
            highlightText: "differentiable soft lookup",
            aiSimplification: "When translating or summarizing, the output generator can look back at the entire input to decide what's relevant — like constantly referring back to the source document while writing.",
          },
          {
            type: "unconscious",
            quote: "Grouped query attention (GQA) shares key-value heads across multiple query heads, reducing the KV cache memory footprint by 4-8× during autoregressive inference while maintaining 97% of full multi-head attention quality.",
            highlightText: "KV cache memory footprint",
            aiSimplification: "Instead of each attention head having its own memory, groups share — dramatically reducing memory use during text generation with almost no quality loss. Like carpooling for attention heads.",
            focusDropNote: "Focus drop detected at 33:55m mark. Memory optimization calculations with specific byte-count estimates caused information overload.",
          },
          {
            type: "unconscious",
            quote: "Rotary positional embeddings (RoPE) encode position information by rotating query and key vectors in 2D subspaces, naturally implementing relative position encoding through the geometric properties of rotation matrices.",
            highlightText: "rotating query and key vectors in 2D subspaces",
            aiSimplification: "Instead of adding position numbers, RoPE spins the vectors — the angle between two rotated vectors automatically encodes their distance, giving relative position for free through geometry.",
            focusDropNote: "Focus drop detected at 37:22m mark. Rotation matrix mathematics and complex number representation of positions exceeded threshold.",
          },
        ],
      },
      {
        title: "Optimization",
        consciousCount: 1,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "Flash Attention reorders the attention computation to exploit GPU SRAM locality, computing exact attention in O(n²) FLOPs but with O(n) memory by tiling the softmax computation and never materializing the full n×n attention matrix.",
            highlightText: "GPU SRAM locality",
            aiSimplification: "Flash Attention rearranges the math to keep data in the GPU's fast local memory instead of slow global memory. Same result, same math, but 2-4× faster because memory access is the real bottleneck.",
          },
          {
            type: "unconscious",
            quote: "Mixed-precision training with bfloat16 accumulation preserves the dynamic range of float32 while halving memory bandwidth requirements, enabling larger batch sizes that improve gradient estimation quality on attention-heavy workloads.",
            highlightText: "bfloat16 accumulation",
            aiSimplification: "Using 16-bit numbers instead of 32-bit cuts memory in half. BFloat16 specifically keeps the same range of big/small numbers — just less decimal precision — which works fine for training.",
            focusDropNote: "Focus drop detected at 42:18m mark. Floating point format comparison with exponent/mantissa bit allocations caused attention drift.",
          },
          {
            type: "unconscious",
            quote: "Gradient checkpointing trades compute for memory by recomputing intermediate activations during the backward pass rather than storing them, reducing memory from O(L) to O(√L) for L transformer layers at the cost of ~33% additional computation.",
            highlightText: "recomputing intermediate activations",
            aiSimplification: "Instead of memorizing every intermediate step (expensive in memory), the model recalculates them when needed — like re-deriving a formula instead of looking it up, trading time for space.",
            focusDropNote: "Focus drop detected at 45:30m mark. End-of-session fatigue combined with memory-compute tradeoff analysis.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    subject: "STATISTICS",
    year: "2024",
    title: "Bayesian Hierarchical Models for Longitudinal Clinical Trial Data",
    recordedDate: "12/19",
    focusScore: "61%",
    unconsciousGaps: 17,
    totalConscious: 4,
    totalUnconscious: 17,
    sectionNames: ["Introduction", "Model Specification", "MCMC Inference"],
    sections: [
      {
        title: "Introduction",
        consciousCount: 2,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "Bayesian hierarchical models enable partial pooling of information across clinical sites, borrowing strength from the ensemble to stabilize estimates for sites with limited enrollment.",
            highlightText: "partial pooling of information",
            aiSimplification: "Instead of analyzing each hospital separately or lumping them all together, this approach finds a middle ground — sharing information to improve estimates where data is sparse.",
          },
          {
            type: "unconscious",
            quote: "The hyperprior specification for the between-site variance component τ² requires careful consideration, as half-Cauchy and inverse-gamma families exhibit markedly different tail behavior near zero.",
            highlightText: "half-Cauchy and inverse-gamma families",
            aiSimplification: "The choice of how variable sites can be matters a lot. Two common options behave very differently when sites are actually similar — one allows near-zero variance, the other resists it.",
            focusDropNote: "Focus drop detected at 03:15m mark. Prior distribution comparison triggered sustained attention loss over 90 seconds.",
          },
          {
            type: "conscious",
            quote: "Exchangeability assumptions underpin the hierarchical structure — sites are treated as random draws from a common distribution rather than fixed entities with unique generating processes.",
            highlightText: "Exchangeability assumptions",
            aiSimplification: "We assume hospital sites are fundamentally similar and any differences are random — like drawing marbles from the same bag rather than different bags.",
          },
          {
            type: "unconscious",
            quote: "The posterior predictive distribution integrates over all sources of uncertainty, yielding calibrated prediction intervals that account for both within-site sampling variability and between-site heterogeneity.",
            highlightText: "posterior predictive distribution",
            aiSimplification: "Predictions include all sources of doubt — uncertainty in patient-level data AND in how much sites differ — giving honest confidence ranges for future outcomes.",
            focusDropNote: "Focus drop detected at 07:22m mark. Integral notation and probability density functions caused cognitive overload.",
          },
        ],
      },
      {
        title: "Model Specification",
        consciousCount: 1,
        unconsciousCount: 8,
        gaps: [
          {
            type: "unconscious",
            quote: "The likelihood for patient j at site i follows y_ij ~ N(μ_i, σ²), where μ_i = α + β·x_ij + u_i, with u_i ~ N(0, τ²) representing the site-specific random intercept drawn from the population distribution.",
            highlightText: "site-specific random intercept",
            aiSimplification: "Each hospital gets its own baseline adjustment (random intercept) drawn from a shared bell curve. This captures the idea that hospitals differ, but not arbitrarily — they cluster around a common average.",
            focusDropNote: "Focus drop detected at 12:05m mark. Multi-level subscript notation (y_ij, μ_i, u_i) caused parsing difficulty.",
          },
          {
            type: "unconscious",
            quote: "The non-centered parameterization u_i = τ·z_i where z_i ~ N(0,1) breaks the funnel geometry in the joint posterior, dramatically improving sampler efficiency when τ is small relative to the data likelihood.",
            highlightText: "funnel geometry in the joint posterior",
            aiSimplification: "A math trick rewrites the model so the sampler doesn't get stuck in a 'funnel' shape — where tiny variance values create extremely narrow regions that are hard to explore efficiently.",
            focusDropNote: "Focus drop detected at 15:40m mark. Reparameterization rationale with geometric intuition exceeded working memory capacity.",
          },
          {
            type: "conscious",
            quote: "Weakly informative priors such as β ~ N(0, 10²) regularize the treatment effect estimate without imposing clinically meaningful constraints, allowing the data to dominate while preventing pathological posterior behavior.",
            highlightText: "Weakly informative priors",
            aiSimplification: "Setting broad-but-not-infinite priors is like saying 'I expect the treatment effect to be reasonable but I'll let the data decide.' It prevents math problems without forcing conclusions.",
          },
          {
            type: "unconscious",
            quote: "The shrinkage factor λ_i = τ²/(τ² + σ²/n_i) quantifies how much each site's estimate is pulled toward the grand mean. Sites with fewer patients (small n_i) experience stronger shrinkage, reflecting their greater sampling uncertainty.",
            highlightText: "shrinkage factor λ_i",
            aiSimplification: "Small hospitals get pulled more strongly toward the overall average because their data is noisier. Large hospitals keep estimates closer to their own data. It's automatic and optimal.",
            focusDropNote: "Focus drop detected at 19:30m mark. Algebraic derivation of shrinkage factor with ratio of variances.",
          },
          {
            type: "unconscious",
            quote: "Time-varying treatment effects are captured through random slopes b_i ~ N(β_t, ψ²), allowing each site's trajectory to deviate from the population-average temporal trend while sharing information about the overall time course.",
            highlightText: "random slopes b_i",
            aiSimplification: "Each hospital can have its own speed of treatment effect over time, but they all inform a shared trend — like runners going different speeds but all running the same race course.",
            focusDropNote: "Focus drop detected at 22:15m mark. Random slope notation layered on random intercept model caused confusion.",
          },
          {
            type: "unconscious",
            quote: "Model comparison via leave-one-out cross-validation (LOO-CV) using Pareto-smoothed importance sampling provides a computationally efficient estimate of out-of-sample predictive accuracy without refitting the model n times.",
            highlightText: "Pareto-smoothed importance sampling",
            aiSimplification: "A clever shortcut estimates how well the model predicts new data by reweighting existing samples. It smooths out unreliable weights using extreme-value statistics — fast and reliable.",
            focusDropNote: "Focus drop detected at 25:50m mark. Importance sampling weight derivation combined with Pareto tail fitting.",
          },
          {
            type: "unconscious",
            quote: "The widely applicable information criterion (WAIC) decomposes into a goodness-of-fit term and an effective number of parameters penalty p_waic, where p_waic sums the posterior variance of log-likelihoods across observations.",
            highlightText: "effective number of parameters penalty",
            aiSimplification: "WAIC measures model quality by balancing how well it fits data versus how complex it is. The complexity penalty automatically counts 'effective' parameters — which can be fractional in hierarchical models.",
            focusDropNote: "Focus drop detected at 28:35m mark. Information criterion formulae with summation notation.",
          },
          {
            type: "unconscious",
            quote: "Posterior predictive checks overlay replicated datasets drawn from the posterior against the observed data, using test statistics like the Kolmogorov-Smirnov statistic to identify systematic model misfit in the tails or distributional shape.",
            highlightText: "Kolmogorov-Smirnov statistic",
            aiSimplification: "The model generates fake datasets and compares them to real data. If the fakes consistently differ (wrong shape, wrong tails), the model is missing something important.",
            focusDropNote: "Focus drop detected at 31:10m mark. Test statistic definitions during model checking phase.",
          },
        ],
      },
      {
        title: "MCMC Inference",
        consciousCount: 1,
        unconsciousCount: 7,
        gaps: [
          {
            type: "unconscious",
            quote: "Hamiltonian Monte Carlo (HMC) augments the parameter space with momentum variables, simulating Hamiltonian dynamics to propose distant moves that maintain high acceptance probability through volume-preserving leapfrog integration.",
            highlightText: "Hamiltonian dynamics",
            aiSimplification: "HMC treats parameter estimation like physics — giving each parameter 'momentum' to explore efficiently, like rolling a ball through a landscape rather than taking random steps.",
            focusDropNote: "Focus drop detected at 35:20m mark. Physics analogy with leapfrog integrator steps caused sustained attention loss.",
          },
          {
            type: "unconscious",
            quote: "The No-U-Turn Sampler (NUTS) automatically tunes the trajectory length by doubling the integration path until the trajectory begins to turn back on itself, eliminating the need to manually specify the number of leapfrog steps.",
            highlightText: "trajectory begins to turn back on itself",
            aiSimplification: "NUTS automatically decides how far to 'roll the ball' — it keeps going until it would start coming back, then stops. No manual tuning needed, which is a major practical advantage.",
            focusDropNote: "Focus drop detected at 38:05m mark. Tree-doubling algorithm description with binary tree recursion.",
          },
          {
            type: "conscious",
            quote: "Convergence diagnostics including R-hat (potential scale reduction factor) and effective sample size (ESS) must be checked across all parameters. R-hat > 1.01 or ESS < 400 indicates unreliable posterior estimates.",
            highlightText: "R-hat",
            aiSimplification: "R-hat compares multiple sampling chains — if they agree (R-hat ≈ 1), the sampler has converged. ESS tells you how many independent samples you effectively have. Both must pass before trusting results.",
          },
          {
            type: "unconscious",
            quote: "Divergent transitions in HMC indicate regions where the leapfrog integrator's discretization error becomes large, typically near sharp curvatures in the posterior geometry caused by hierarchical variance parameters approaching zero.",
            highlightText: "divergent transitions",
            aiSimplification: "When the sampler hits a sharp curve in the probability landscape, its steps become inaccurate — like a car skidding on a tight turn. These 'divergences' signal the model needs reparameterization.",
            focusDropNote: "Focus drop detected at 42:45m mark. Geometric interpretation of divergences in hierarchical funnels.",
          },
          {
            type: "unconscious",
            quote: "Rank-normalized split-R-hat computes the convergence statistic on rank-transformed, split chains, providing robustness to heavy-tailed posteriors and multimodality that the original R-hat may miss.",
            highlightText: "Rank-normalized split-R-hat",
            aiSimplification: "An improved version of the convergence check that works even when the posterior has weird shapes or extreme values — it ranks the samples first, making the comparison more robust.",
            focusDropNote: "Focus drop detected at 45:10m mark. Rank transformation procedure with chain splitting details.",
          },
          {
            type: "unconscious",
            quote: "Thinning MCMC samples is generally discouraged in modern practice; instead, increasing the total number of iterations is preferred because thinned chains discard information and reduce ESS for the same computational budget.",
            highlightText: "Thinning MCMC samples is generally discouraged",
            aiSimplification: "Don't throw away samples to reduce autocorrelation — it's wasteful. Just run the sampler longer. Keeping all samples gives you more information per minute of computation.",
            focusDropNote: "Focus drop detected at 47:30m mark. Counter-intuitive recommendation contradicted textbook practices.",
          },
          {
            type: "unconscious",
            quote: "Variational inference using automatic differentiation variational inference (ADVI) provides rapid approximate posteriors by minimizing the KL divergence between a mean-field Gaussian approximation and the true posterior through stochastic gradient descent.",
            highlightText: "mean-field Gaussian approximation",
            aiSimplification: "A fast shortcut assumes all parameters are independent normal distributions and finds the best-fitting ones. Much faster than MCMC but misses correlations between parameters.",
            focusDropNote: "Focus drop detected at 50:15m mark. End-of-session fatigue during variational inference derivation.",
          },
          {
            type: "unconscious",
            quote: "Pathfinder initialization uses L-BFGS optimization along the posterior ridge to generate approximate draws that warm-start HMC chains, reducing the warmup iterations needed from thousands to hundreds in complex hierarchical models.",
            highlightText: "L-BFGS optimization along the posterior ridge",
            aiSimplification: "Before the main sampling begins, a fast optimizer finds the general area of high probability, giving the sampler a head start — like using GPS before hiking instead of wandering randomly.",
            focusDropNote: "Focus drop detected at 52:40m mark. Optimization algorithm details layered on MCMC initialization context.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    subject: "MOLECULAR BIO",
    year: "2025",
    title: "CRISPR-Cas9 Off-Target Effects & Genome Integrity Preservation",
    recordedDate: "04/11",
    focusScore: "93%",
    unconsciousGaps: 3,
    totalConscious: 2,
    totalUnconscious: 3,
    sectionNames: ["Introduction", "Off-Target Mechanisms", "Mitigation Strategies"],
    sections: [
      {
        title: "Introduction",
        consciousCount: 1,
        unconsciousCount: 1,
        gaps: [
          {
            type: "conscious",
            quote: "CRISPR-Cas9 tolerates up to 3-5 mismatches between the guide RNA and genomic DNA, creating a non-trivial probability of cleavage at unintended loci throughout the 3.2 billion base-pair genome.",
            highlightText: "3-5 mismatches",
            aiSimplification: "The molecular scissors aren't perfectly precise — they can still cut DNA even when the address label has a few typos, creating risk of unwanted edits across the genome.",
          },
          {
            type: "unconscious",
            quote: "Chromatin accessibility modulates off-target activity; euchromatic regions with open nucleosome configurations exhibit 10-100× higher cleavage rates compared to heterochromatic counterparts.",
            highlightText: "euchromatic regions with open nucleosome",
            aiSimplification: "DNA that's unpacked and exposed gets cut much more easily — like how an open book is easier to edit than one that's tightly closed on a shelf.",
            focusDropNote: "Focus drop detected at 04:10m mark. Brief attention dip during chromatin structure comparison — recovered within 15 seconds.",
          },
        ],
      },
      {
        title: "Off-Target Mechanisms",
        consciousCount: 1,
        unconsciousCount: 1,
        gaps: [
          {
            type: "conscious",
            quote: "DNA bulge formation at the guide RNA–target DNA interface allows Cas9 to accommodate insertions or deletions, bypassing the seed region specificity that normally governs target recognition.",
            highlightText: "DNA bulge formation",
            aiSimplification: "When the guide RNA and DNA don't perfectly match, the DNA can loop out and create a bulge — like a wrinkle in fabric — that lets the scissors cut anyway.",
          },
          {
            type: "unconscious",
            quote: "GUIDE-seq analysis revealed that truncated guide RNAs with 17-18 nucleotide spacers paradoxically improved specificity by 5000-fold compared to canonical 20-nucleotide guides without reducing on-target efficiency.",
            highlightText: "truncated guide RNAs",
            aiSimplification: "Surprisingly, shorter guide molecules are much more precise without losing effectiveness — like a sniper scope that works better when slightly zoomed out.",
            focusDropNote: "Focus drop detected at 12:33m mark. Quantitative comparison section with logarithmic fold-change calculations.",
          },
        ],
      },
      {
        title: "Mitigation Strategies",
        consciousCount: 0,
        unconsciousCount: 1,
        gaps: [
          {
            type: "unconscious",
            quote: "High-fidelity Cas9 variants such as eSpCas9(1.1) and HiFi Cas9 employ charge-neutralizing mutations in the REC3 domain that destabilize off-target R-loop intermediates without affecting on-target catalysis.",
            highlightText: "charge-neutralizing mutations",
            aiSimplification: "Engineered versions of the scissors are weakened just enough that they only cut when the match is perfect — mismatched DNA falls off before cutting can happen.",
            focusDropNote: "Focus drop detected at 18:05m mark. Protein engineering terminology caused brief cognitive load spike.",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    subject: "NEUROSCIENCE",
    year: "2024",
    title: "Glial Cell Contributions to Neural Circuit Homeostasis",
    recordedDate: "11/05",
    focusScore: "78%",
    unconsciousGaps: 9,
    totalConscious: 4,
    totalUnconscious: 9,
    sectionNames: ["Introduction", "Astrocyte Signaling", "Microglia Dynamics", "Clinical Implications"],
    sections: [
      {
        title: "Introduction",
        consciousCount: 1,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "Glial cells outnumber neurons by approximately 1.5:1 in the human brain and actively regulate synaptic transmission, ion homeostasis, and metabolic support through bidirectional signaling with neuronal circuits.",
            highlightText: "bidirectional signaling with neuronal circuits",
            aiSimplification: "Brain support cells aren't just passive scaffolding — they actively talk to and listen to neurons, controlling how signals travel and keeping the brain's chemical balance stable.",
          },
          {
            type: "unconscious",
            quote: "The tripartite synapse model posits that astrocytic perisynaptic processes form a functional unit with the pre- and postsynaptic terminals, modulating neurotransmitter clearance through glutamate transporter GLT-1 expression.",
            highlightText: "tripartite synapse model",
            aiSimplification: "Synapses aren't just two neurons talking — there's a third partner (the astrocyte) that wraps around the connection and controls how quickly chemical signals get cleaned up.",
            focusDropNote: "Focus drop detected at 03:45m mark. Three-component synapse model with transporter protein names caused cognitive load.",
          },
          {
            type: "unconscious",
            quote: "Oligodendrocyte precursor cells (OPCs) persist in the adult brain and can differentiate into myelinating oligodendrocytes in response to neuronal activity, enabling experience-dependent myelination throughout the lifespan.",
            highlightText: "experience-dependent myelination",
            aiSimplification: "The brain keeps making insulating cells throughout life, and they respond to activity — frequently used neural pathways get better insulation, like upgrading busy roads to highways.",
            focusDropNote: "Focus drop detected at 06:20m mark. Cell lineage terminology with abbreviations OPC → OL.",
          },
        ],
      },
      {
        title: "Astrocyte Signaling",
        consciousCount: 1,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "Astrocyte calcium waves propagate through gap junction-coupled networks at 15-25 μm/s, coordinating metabolic activity across hundreds of astrocytes and modulating local blood flow through prostaglandin E2 release.",
            highlightText: "calcium waves propagate through gap junction-coupled networks",
            aiSimplification: "Astrocytes send slow waves of calcium through their connected network, like a stadium wave — this coordinates energy delivery and blood flow across large brain regions.",
          },
          {
            type: "unconscious",
            quote: "Gliotransmitter release — including D-serine, ATP, and glutamate — occurs through Ca²⁺-dependent vesicular exocytosis and modulates NMDA receptor activity at excitatory synapses with millisecond-scale temporal precision.",
            highlightText: "Gliotransmitter release",
            aiSimplification: "Astrocytes release their own chemical messengers with precise timing, directly tuning how sensitive nearby synapses are — like a sound engineer adjusting amplifier gain in real time.",
            focusDropNote: "Focus drop detected at 14:30m mark. Multiple gliotransmitter names and release mechanisms caused information overload.",
          },
          {
            type: "unconscious",
            quote: "Astrocytic lactate shuttle provides neurons with the metabolic fuel required for sustained high-frequency firing. Disruption of monocarboxylate transporter MCT-2 impairs long-term memory formation in the hippocampus.",
            highlightText: "lactate shuttle",
            aiSimplification: "Astrocytes feed neurons with lactate fuel during intense activity. If this fuel delivery system breaks, the brain can't form long-term memories — showing that glia are essential for learning.",
            focusDropNote: "Focus drop detected at 18:15m mark. Metabolic pathway terminology with transporter protein specifics.",
          },
          {
            type: "unconscious",
            quote: "Reactive astrogliosis following CNS injury involves morphological hypertrophy, upregulation of GFAP, and formation of a glial scar that both limits damage spread and inhibits axonal regeneration through chondroitin sulfate proteoglycan expression.",
            highlightText: "glial scar",
            aiSimplification: "After brain injury, astrocytes swell up and form a scar barrier. It contains the damage (good) but also blocks nerve regrowth (bad) — a protective response with a problematic tradeoff.",
            focusDropNote: "Focus drop detected at 22:40m mark. Dual-function concept of scar formation with molecular inhibitor names.",
          },
        ],
      },
      {
        title: "Microglia Dynamics",
        consciousCount: 1,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "Microglia continuously survey the brain parenchyma through dynamic process extension and retraction, contacting each synapse approximately once every 4-5 hours under physiological conditions to assess synaptic health.",
            highlightText: "dynamic process extension and retraction",
            aiSimplification: "The brain's immune cells are constantly reaching out and touching every synapse, checking on each one every few hours — like a security guard doing regular patrols of every room.",
          },
          {
            type: "unconscious",
            quote: "Complement-mediated synaptic pruning by microglia, involving C1q tagging of weak synapses and CR3 receptor-dependent phagocytosis, is reactivated in neurodegenerative diseases leading to pathological synapse loss.",
            highlightText: "C1q tagging of weak synapses",
            aiSimplification: "Microglia eat weak synapses marked with molecular 'eat me' tags. This is normal during development, but when it reactivates in diseases like Alzheimer's, it destroys healthy connections too.",
            focusDropNote: "Focus drop detected at 28:10m mark. Complement cascade components C1q, C3, CR3 caused dense terminology overload.",
          },
          {
            type: "unconscious",
            quote: "Microglial states exist on a continuum rather than the classical M1/M2 binary; single-cell RNA sequencing has revealed disease-associated microglia (DAM) with unique transcriptomic signatures distinct from both resting and classically activated phenotypes.",
            highlightText: "disease-associated microglia (DAM)",
            aiSimplification: "Microglia aren't simply 'good' or 'bad' — they exist in many states. In disease, they adopt a unique identity (DAM) that's neither their resting nor their inflamed state.",
            focusDropNote: "Focus drop detected at 32:55m mark. Single-cell sequencing methodology layered on microglia phenotype classification.",
          },
        ],
      },
      {
        title: "Clinical Implications",
        consciousCount: 1,
        unconsciousCount: 2,
        gaps: [
          {
            type: "conscious",
            quote: "PLX5622 CSF1R inhibitor selectively depletes microglia by >95% within 7 days, and upon withdrawal allows rapid repopulation from remaining progenitors — providing a powerful tool for studying microglial contributions to circuit function in vivo.",
            highlightText: "PLX5622 CSF1R inhibitor",
            aiSimplification: "A drug can remove nearly all microglia from the brain, and they grow back when the drug stops. This lets researchers study what happens to brain circuits without their immune cells.",
          },
          {
            type: "unconscious",
            quote: "Astrocyte-targeted gene therapy using AAV-PHP.eB vectors with GFAP promoter specificity enables selective expression of potassium channel Kir4.1 in astrocytes, rescuing seizure phenotypes in temporal lobe epilepsy models.",
            highlightText: "AAV-PHP.eB vectors with GFAP promoter",
            aiSimplification: "A specialized virus delivers a gene specifically into astrocytes to fix their potassium channels — correcting the chemical imbalance that causes seizures without affecting other cell types.",
            focusDropNote: "Focus drop detected at 38:20m mark. Gene therapy vector nomenclature with promoter-specific targeting details.",
          },
          {
            type: "unconscious",
            quote: "Clemastine fumarate, an antihistamine, promotes oligodendrocyte differentiation and remyelination in multiple sclerosis models by antagonizing muscarinic M1 receptors on OPCs, with phase II clinical trials showing improved visual evoked potential latency.",
            highlightText: "Clemastine fumarate",
            aiSimplification: "An allergy medication unexpectedly helps rebuild myelin insulation in MS patients by pushing stem cells to mature into insulating cells — it's now in clinical trials with promising results.",
            focusDropNote: "Focus drop detected at 42:05m mark. Drug repurposing mechanism and clinical trial endpoint descriptions.",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    subject: "COMPUTER SCIENCE",
    year: "2024",
    title: "Distributed Consensus Algorithms in Byzantine Fault-Tolerant Systems",
    recordedDate: "10/22",
    focusScore: "69%",
    unconsciousGaps: 13,
    totalConscious: 5,
    totalUnconscious: 13,
    sectionNames: ["Introduction", "PBFT Protocol", "Raft vs Paxos", "Modern BFT"],
    sections: [
      {
        title: "Introduction",
        consciousCount: 2,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "The Byzantine Generals Problem formalizes the challenge of achieving consensus among distributed nodes when up to f of 3f+1 nodes may exhibit arbitrary (Byzantine) failure behavior, including sending contradictory messages to different peers.",
            highlightText: "Byzantine Generals Problem",
            aiSimplification: "How do computers agree on something when some of them might be lying? You need at least 3f+1 nodes to tolerate f liars — the honest majority overwhelms the dishonest minority.",
          },
          {
            type: "unconscious",
            quote: "The FLP impossibility result proves that deterministic consensus is impossible in asynchronous systems where even a single process may crash, forcing practical systems to rely on partial synchrony assumptions or randomization.",
            highlightText: "FLP impossibility result",
            aiSimplification: "It's mathematically proven that perfect agreement is impossible if the network has no timing guarantees and even one node can fail. Real systems work around this by assuming 'mostly timely' communication.",
            focusDropNote: "Focus drop detected at 04:30m mark. Impossibility proof statement with formal system model definitions.",
          },
          {
            type: "conscious",
            quote: "Safety properties guarantee that all honest nodes agree on the same value, while liveness properties ensure that the protocol eventually makes progress. Balancing these under partial synchrony is the central design challenge.",
            highlightText: "Safety properties",
            aiSimplification: "Two goals: never disagree (safety) and always eventually decide (liveness). You can always have safety, but liveness requires timing assumptions — you can't have both unconditionally.",
          },
          {
            type: "unconscious",
            quote: "CAP theorem states that a distributed system can provide at most two of three guarantees: Consistency, Availability, and Partition tolerance. Since network partitions are inevitable, the real choice is between consistency and availability during partitions.",
            highlightText: "CAP theorem",
            aiSimplification: "When the network splits, you must choose: either stop responding (consistent but unavailable) or keep responding with potentially stale data (available but inconsistent). You can't have both.",
            focusDropNote: "Focus drop detected at 08:15m mark. Three-way tradeoff visualization with practical system categorization.",
          },
          {
            type: "unconscious",
            quote: "Vector clocks assign each process a logical timestamp vector of dimension n, where the j-th entry represents process i's knowledge of process j's latest event, enabling causal ordering without synchronized physical clocks.",
            highlightText: "Vector clocks",
            aiSimplification: "Each computer keeps a list of counters — one per peer. By comparing lists, they can tell which events happened before others without needing synchronized watches.",
            focusDropNote: "Focus drop detected at 11:50m mark. Vector comparison rules for concurrent vs causally ordered events.",
          },
        ],
      },
      {
        title: "PBFT Protocol",
        consciousCount: 1,
        unconsciousCount: 4,
        gaps: [
          {
            type: "unconscious",
            quote: "PBFT's three-phase protocol (pre-prepare, prepare, commit) requires O(n²) message complexity per consensus round, as each node must broadcast to all other nodes during the prepare and commit phases.",
            highlightText: "O(n²) message complexity",
            aiSimplification: "Every node must talk to every other node twice per agreement round — so costs grow as the square of the number of nodes. This limits PBFT to small clusters (typically under 20 nodes).",
            focusDropNote: "Focus drop detected at 16:25m mark. Message flow diagram with quadratic complexity analysis.",
          },
          {
            type: "conscious",
            quote: "View changes in PBFT replace a faulty primary by requiring 2f+1 nodes to agree that the current leader has stopped making progress, preventing a single compromised leader from blocking the entire system indefinitely.",
            highlightText: "View changes",
            aiSimplification: "If the leader node fails or misbehaves, two-thirds of the group can vote to replace it. This ensures no single point of failure can permanently stall the system.",
          },
          {
            type: "unconscious",
            quote: "Checkpoint certificates consisting of 2f+1 signed checkpoint messages allow nodes to garbage-collect old log entries and bound the state that must be transferred during recovery or view change operations.",
            highlightText: "Checkpoint certificates",
            aiSimplification: "Periodically, nodes collectively sign off that 'everything up to this point is agreed upon.' This lets them delete old records and speeds up recovery when a node falls behind.",
            focusDropNote: "Focus drop detected at 20:10m mark. Certificate construction with cryptographic signing details.",
          },
          {
            type: "unconscious",
            quote: "The stable leader optimization batches multiple client requests into a single consensus proposal, amortizing the O(n²) communication cost across hundreds of operations and improving throughput by 10-50× under high load.",
            highlightText: "stable leader optimization",
            aiSimplification: "Instead of running expensive agreement for every single request, a trusted leader bundles many requests together — like a bus carrying 50 people instead of 50 individual taxis.",
            focusDropNote: "Focus drop detected at 24:35m mark. Throughput calculations with batching efficiency formulas.",
          },
          {
            type: "unconscious",
            quote: "Speculative execution allows nodes to tentatively apply operations after the pre-prepare phase, reducing latency from three communication rounds to one in the common case when the primary is honest and the network is synchronous.",
            highlightText: "Speculative execution",
            aiSimplification: "Nodes optimistically execute operations before full agreement, betting that everything will work out. If it does (the common case), the system responds 3× faster. If not, it rolls back.",
            focusDropNote: "Focus drop detected at 28:00m mark. Optimistic vs pessimistic protocol paths with rollback scenarios.",
          },
        ],
      },
      {
        title: "Raft vs Paxos",
        consciousCount: 1,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "Raft decomposes consensus into three sub-problems — leader election, log replication, and safety — making the protocol more understandable than Paxos while providing equivalent correctness guarantees under crash fault assumptions.",
            highlightText: "three sub-problems",
            aiSimplification: "Raft breaks the complex consensus problem into three simple pieces: pick a leader, copy the leader's log to followers, and ensure safety. Same result as Paxos but much easier to understand and implement.",
          },
          {
            type: "unconscious",
            quote: "Paxos' Multi-decree variant (Multi-Paxos) achieves steady-state single-round-trip latency by maintaining a stable leader, but the original specification's ambiguity in leader election and log compaction led to widely varying implementations.",
            highlightText: "Multi-decree variant",
            aiSimplification: "Multi-Paxos is fast in practice (one round trip) but the original paper left so many details unspecified that every company implemented it differently — a major practical problem.",
            focusDropNote: "Focus drop detected at 33:45m mark. Comparison of Paxos variants with implementation-specific deviations.",
          },
          {
            type: "unconscious",
            quote: "Raft's term-based leader election uses randomized election timeouts to break symmetry, ensuring that in most cases only a single candidate requests votes per term, achieving leader election in a median of 1.5 round-trip times.",
            highlightText: "randomized election timeouts",
            aiSimplification: "Each node waits a random amount of time before trying to become leader. This randomness almost always ensures only one candidate steps up, avoiding election conflicts.",
            focusDropNote: "Focus drop detected at 37:20m mark. Timeout distribution analysis with election convergence proofs.",
          },
          {
            type: "unconscious",
            quote: "Joint consensus in Raft handles cluster membership changes by temporarily requiring majorities from both the old and new configurations, preventing split-brain scenarios during dynamic reconfiguration.",
            highlightText: "Joint consensus",
            aiSimplification: "When adding or removing nodes, Raft temporarily requires agreement from BOTH the old group and the new group. This prevents the dangerous scenario where two leaders exist simultaneously.",
            focusDropNote: "Focus drop detected at 40:50m mark. Configuration transition diagrams with overlapping quorum requirements.",
          },
        ],
      },
      {
        title: "Modern BFT",
        consciousCount: 1,
        unconsciousCount: 3,
        gaps: [
          {
            type: "conscious",
            quote: "HotStuff achieves linear message complexity O(n) per view by having the leader aggregate partial threshold signatures into a single quorum certificate, replacing PBFT's all-to-all broadcast with a star topology communication pattern.",
            highlightText: "linear message complexity O(n)",
            aiSimplification: "HotStuff found a way to reduce communication from everyone-talks-to-everyone (n²) to everyone-talks-to-leader-only (n). The leader combines digital signatures into one compact proof.",
          },
          {
            type: "unconscious",
            quote: "Tendermint combines PBFT-style three-phase voting with a Nakamoto-style proposer rotation, achieving BFT consensus with deterministic finality in two communication rounds while supporting thousands of validator nodes.",
            highlightText: "deterministic finality in two communication rounds",
            aiSimplification: "Tendermint blends two consensus traditions: instant certainty from classical BFT with rotating leaders from blockchain. Once agreed, decisions are final — no 'wait for confirmations.'",
            focusDropNote: "Focus drop detected at 45:15m mark. Hybrid protocol design combining classical and blockchain consensus elements.",
          },
          {
            type: "unconscious",
            quote: "DAG-based consensus protocols like Narwhal-Tusk separate data dissemination from ordering, achieving 130,000+ transactions per second by constructing a directed acyclic graph of batched proposals that are then totally ordered by a separate consensus layer.",
            highlightText: "directed acyclic graph of batched proposals",
            aiSimplification: "Instead of agreeing on one block at a time, DAG protocols let everyone propose simultaneously in a web structure, then sort the web into order — massively boosting throughput.",
            focusDropNote: "Focus drop detected at 48:30m mark. DAG structure with causal history references and topological sorting.",
          },
          {
            type: "unconscious",
            quote: "Accountable safety in modern BFT protocols provides cryptographic proof of misbehavior: if safety is violated, at least f+1 faulty nodes can be identified and their signed conflicting messages serve as irrefutable evidence for slashing mechanisms.",
            highlightText: "cryptographic proof of misbehavior",
            aiSimplification: "If bad actors break consensus, their contradictory signed messages serve as undeniable evidence — like catching a liar with two written contradictory statements bearing their signature.",
            focusDropNote: "Focus drop detected at 51:40m mark. End-of-session fatigue with cryptographic accountability proofs.",
          },
        ],
      },
    ],
  },
];

export function getSessionById(id: string): SessionData | undefined {
  return sessions.find((s) => s.id === id);
}
