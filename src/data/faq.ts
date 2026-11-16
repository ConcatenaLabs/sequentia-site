// The questions on the home page. Each answer is HTML; keep it to what is true of Sequentia as it
// runs now, and link docs.sequentia.io for depth.
import { DOCS, TESTNET, CONCATENA } from '../site';

export interface Faq {
  q: string;
  a: string;
}

export const FAQ: Faq[] = [
  {
    q: "What's the purpose of Sequentia?",
    a: `<p>Sequentia is a Bitcoin sidechain for asset tokenization and disintermediated exchanges.
      Anyone can issue an asset on it, such as a stablecoin or a stock token, and trade it peer to peer
      for other assets or for bitcoin on Bitcoin itself.</p>
      <p>The wallet this makes possible is a self-custodial Bitcoin wallet in which financial assets
      can also be held, sent and swapped for BTC directly between the people trading.</p>
      <p>Sequentia is built very much like Bitcoin, to work with Bitcoin and with the tools built for it,
      so that BTC can serve as the money of capital markets that need no intermediaries.</p>`,
  },
  {
    q: 'Why use a Bitcoin sidechain to digitize financial assets instead of a central server or other technologies?',
    a: `<p>An asset issued by a company still depends on that company, and often on the courts and
      regulators behind it. Tokenization does not change that trust in the issuer.</p>
      <p>What a peer-to-peer network removes is every other layer: brokers, central securities
      depositories and the other intermediaries between a trade and its settlement, with their
      costs, delays and opening hours. On a shared network, order books can be open to everyone and
      trades settle around the clock, in minutes.</p>`,
  },
  {
    q: 'Why not tokenize over Bitcoin meta-protocols like RGB, Taproot Assets, Runes or Omni Layer?',
    a: `<p>Every meta-protocol commits its data to Bitcoin transactions, so its assets compete for
      Bitcoin's block space with payments. As Bitcoin is used more as money, that space is worth more
      to payments than to asset transfers, and asset activity at any real scale is priced out.</p>
      <p>Meta-protocols do trade assets against real BTC, which earlier sidechains could only do
      against a pegged copy of bitcoin. Sequentia does both: assets live in their own block space,
      and they swap for BTC on Bitcoin, atomically and in real time, because every Sequentia block is
      anchored to a Bitcoin block.</p>`,
  },
  {
    q: 'Who are the "miners" or block producers in Sequentia?',
    a: `<p>Sequentia's blocks are produced by an open federation: anyone who stakes the Sequence token
      (SEQ) can join it, where Liquid's blocks come from a closed federation of fixed members. Each
      block is proposed by an elected leader and certified by a committee of stakers, and a certified
      block is final at once, unless the Bitcoin block it is anchored to is reorganized away.</p>
      <p>A stake needs at least 40,000 SEQ, one hundredth of a percent of the supply. Holders with
      less can join a staking pool. Producers earn the transaction fees of their blocks, and the
      supply of SEQ is fixed.</p>
      <p>Safety rests on every node checking every block for itself: a committee can delay blocks
      but never make an invalid one valid. That is why Sequentia has no slashing.</p>
      <p><a href="${DOCS}">How staking works, in the documentation</a></p>`,
  },
  {
    q: 'What is Concatena Labs, and what is its relation to Sequentia?',
    a: `<p>Concatena Labs, Inc. is a Bitcoin and free-software development studio, incorporated as a
      Delaware C-Corp. It funds and leads the development of Sequentia and builds applications on it,
      such as the Ambra wallet.</p>
      <p>The Sequentia protocol itself is free and open-source software and welcomes anyone's
      contributions. Blocks are produced, and their fees earned, by the stakers.</p>`,
  },
  {
    q: "What do Sequentia and Blockstream's Liquid Network have in common?",
    a: `<p>Sequentia is built on Elements, the codebase of the Liquid Network. It shares Liquid's
      issued assets, its script system including Simplicity, and its confidential transactions.
      Applications and tools written for Elements carry over to Sequentia with little change.</p>`,
  },
  {
    q: 'What are the differences between Sequentia and Liquid?',
    a: `<ul>
      <li><b>Fees in any asset.</b> A transaction pays its fee in any asset a block producer
        accepts, such as the stablecoin it sends.</li>
      <li><b>Bitcoin anchoring.</b> Every Sequentia block references a Bitcoin block header, and the
        chain follows Bitcoin's reorganizations in real time. Assets therefore swap directly for
        bitcoin on Bitcoin.</li>
      <li><b>An open federation.</b> Blocks are produced by anyone who stakes the Sequence token
        (SEQ), where Liquid has a closed federation. All 400 million SEQ exist from genesis, and
        producers earn the fees.</li>
      <li><b>Bitcoin on Bitcoin.</b> A wallet holds BTC on Bitcoin itself and swaps it directly for
        Sequentia assets, where Liquid moves bitcoin as L-BTC, pegged in and out through its
        federation.</li>
      <li><b>Transparent by default.</b> Addresses are in Bitcoin's own format, so one address
        receives both BTC and Sequentia assets. Confidential transactions are a choice the holder
        makes for each transfer.</li>
    </ul>
    <p>Most people therefore never need a pegged bitcoin on Sequentia. Anyone can still issue one,
      as an asset backed by bitcoin its issuer holds. It is useful only where bitcoin's value has to
      sit on Sequentia itself: in a confidential transaction, which hides amounts only within
      Sequentia, or in a contract that settles on Sequentia alone, such as an order that rests in a
      book while its owner is offline.</p>`,
  },
  {
    q: 'What is the Sequence token (SEQ)?',
    a: `<p>Sequence (ticker SEQ, tSEQ on the testnet) is the token that is staked to produce blocks.
      That is its only special role: for fees it is one asset among all the others. Its supply is
      fixed at 400 million, all created at genesis.</p>`,
  },
  {
    q: 'What is Ambra Wallet?',
    a: `<p>Ambra is the wallet Concatena Labs builds for Sequentia, and its reference for what a
      Sequentia wallet should be. One recovery phrase holds bitcoin on Bitcoin and assets on Sequentia
      side by side, and fees can be paid in the asset being sent.</p>
      <p>Ambra for Android runs on Bitcoin testnet4 and the Sequentia testnet. Download it from
      <a href="${CONCATENA}/ambra/">Ambra's site</a>.</p>`,
  },
  {
    q: "What's the smart contract language or script system used by Sequentia?",
    a: `<p>Sequentia uses Elements Script and Elements Miniscript, extensions of Bitcoin Script and
      Miniscript with additional opcodes, for example for covenants. It also supports Simplicity, a
      more expressive language designed to replace Script. Both work on Bitcoin's UTXO model.</p>`,
  },
  {
    q: 'What are the steps to get started with Sequentia?',
    a: `<ol>
      <li>Open the <a href="${TESTNET}/wallet/">web wallet</a>, or install
        <a href="${CONCATENA}/ambra/">Ambra for Android</a>.</li>
      <li>Get free test bitcoin and Sequentia assets from the <a href="${TESTNET}/faucet">faucet</a>.</li>
      <li>Send, receive and pay fees in any asset, and follow your transactions on the
        <a href="${TESTNET}/explorer/">block explorer</a>.</li>
    </ol>
    <p>To run a node, download <a href="${TESTNET}/download/core/">Sequentia Core</a> for Linux or
      Windows, and read the <a href="${DOCS}">documentation</a>.</p>`,
  },
];
