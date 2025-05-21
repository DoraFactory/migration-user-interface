import styled, { AnyStyledComponent } from 'styled-components';

export const TermsOfUsePage = () => (
  <Styled.Article>
    <header>
      <h1>Terms of Use</h1>
      <span style={{ display: 'block', fontSize: '16px' }}>Last updated: Aug 1, 2024</span>
    </header>
    <section>
      <p>
        This Terms of Use Agreement (“Agreement”) constitutes a legally binding agreement made
        between you, whether personally or on behalf of an entity (“user” or “you” or “developer”)
        and the Dora Grant DAO Foundation, the Matsushiba Foundation, both of which are Cayman
        Islands foundations (collectively, the “Company” or “we” or “us” or “our”), concerning your
        access to and use of the website at{' '}
        <a href="https://dorafactory.org">https://dorafactory.org</a>, any services linked to this
        Agreement, and any other media form, media channel, mobile website or mobile application
        related or connected thereto (collectively, the “Website”).
      </p>
      <p>
        The Website, Dora Vota's block explorer, MACI/aMACI explorers, and the Token Migration
        interface are provided by Matsushiba Foundation (“MF”); the Public Good Staking portal
        described below is provided by Dora Grant DAO Foundation (“DGD”). MF is not responsible for
        Public Good Staking and DGD is not responsible for other aspects of the Website and
        functionalities.
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          Note: This Agreement has an arbitration provision, which provision is contained below
          under the heading “Disputes and Choice of Law”. To the maximum extent permitted by law,
          you agree that disputes between you and company will be resolved by binding, individual
          arbitration, and you waive your right to a trial by jury or to participate as a plaintiff
          or class member in any purported class action or other representative proceeding.
        </span>
      </p>

      <p>
        The Website provides access to the following functions:
        <ul>
          <li>
            <span style={{ fontWeight: 'bold' }}>Staking:</span> Subject to these Staking Terms of
            Use, we operate and monitor validator nodes and software to perform non-custodial
            validation-as-a-service or otherwise participate in staking protocols in connection with
            Digital Assets solely for supported blockchains (the “staking functions”). The staking
            functions are strictly offered on a non-custodial basis. Additionally, you authorize
            Dora Factory to exercise your voting rights associated with Digital Assets that you
            delegate to our validator addresses; provided, however, that (i) voting rights are only
            applicable for certain supported blockchains, and (ii) we may exercise voting rights
            solely at our own discretion, and we are under no obligation to exercise voting rights
            on your behalf. Notwithstanding the foregoing, you also retain a right to exercise such
            voting rights associated with any such Digital Assets and, subject to the protocols of
            the applicable supported blockchain, may exercise those rights before we do or may
            change any vote that we cast after we have done so.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Public Good Staking:</span> This is an
            infrastructure by which institutions and individuals can support ecosystems through the
            staking of tokens. Some ecosystems are yet to be generally available for Public Good
            Staking. This part of the website includes a published dashboard for all the
            nodes/validators available for Public Good Staking, as well as a list of all governance
            proposals and voting results Dora Factory has made on behalf of the nodes/validators.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Vota Explorer:</span> This is a website that
            displays voting rounds and related information on Dora Vota special-purpose blockchain.
            Information displayed on this website includes but is not limited to voting round
            information, voting transactions, voting logics (expressed in circuits), zero-knowledge
            proof information. The website also provides an interface for users to deploy voting
            rounds and an interface for users to vote in a voting round.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>QRNG API:</span> An experimental API service to
            generate random numbers from cloud-based quantum computers. The API is only available
            for a limited number of requests.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Token Migration:</span> An interface that provides
            access to a protocol migrating DORA tokens from Ethereum network to Dora Vota’s network.
          </li>
        </ul>
      </p>
      <p>
        All of the foregoing shall be referred to collectively as the “Functions”. Supplemental
        terms and conditions or documents that may be posted on the Website from time to time, are
        hereby expressly incorporated into this Agreement by reference.
      </p>
      <p>
        Company makes no representation that the Website or Company Functions are appropriate or
        available outside Cayman Islands. The Website and Company Services are not intended for
        distribution to or use by any person or entity in any jurisdiction or country where such
        distribution or use would be contrary to law or regulation or which would subject Company to
        any registration requirement within such jurisdiction or country and some of the Company
        Services may not be available in certain jurisdictions (“Excluded Jurisdictions”) or are
        barred from using the Website and Company Services by export controls, sanctions or other
        laws (“Excluded Individuals”). Accordingly, those persons who choose to access the Website
        or Company Services from other locations do so on their own initiative and are solely
        responsible for compliance with local laws, if and to the extent local laws are applicable.
      </p>
      <h2>Eligibility</h2>
      <p>
        You cannot register for or use the Website or Company Services if you do not have legal
        capacity to enter contracts and are resident or accessing the Website or Company Services
        from any Excluded Jurisdiction or are an Excluded Individual.
      </p>
      <p>
        All users who are minors in the jurisdiction in which they reside (generally under the age
        of 18) must have the permission of, and be directly supervised by, their parent or guardian
        to use the Website. If you are a minor, you must have your parent or guardian read and agree
        to this Agreement prior to you using the Website. Persons under the age of 13 (or under the
        age of 16 for residents of the United Kingdom and the European Union) or in an Excluded
        Jurisdiction are not permitted to register for the Website or use the Company Services.
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          You accept and agree to be bound by this agreement by acknowledging such acceptance during
          the registration process (if applicable) or by accessing and using the Website and Company
          Services. If you do not agree to abide by this Agreement, or to modifications that Company
          may make to this agreement in the future, do not use or access or continue to use or
          access the Company Services or the Website.
        </span>
      </p>

      <h2>Digital Assets</h2>
      <p>
        The Company Services may allow developers and users to donate and store locally on their own
        devices, tokens, cryptocurrencies and other crypto or blockchain-based digital assets
        (collectively, “Digital Assets”). Digital Assets are not intended to be securities or for
        investment purposes.
      </p>

      <h2>Accounts and Wallets</h2>
      <p>
        You do not need an account to use the Website and Company Services; however, you do need a
        wallet hosted by one of the accepted wallet providers—ERC 20, Cosmos or Aptos (“Wallet”) to
        engage in Staking, Public Good Staking, or Token Migration.
      </p>
      <p>
        If you create an account, you agree to provide complete and accurate information for that
        account and keep that account updated. You are responsible for the safety and security of
        any credentials required to access your account or Wallet. You are responsible for all
        transactions on the Website or Company Services using your Wallet or account, whether
        authorized or not.
      </p>

      <h2>Staking</h2>
      <p>
        You agree and understand that this Staking Agreement is subject to the terms and conditions
        set forth in your User Agreement(s), which also govern this Staking Agreement. In case of
        conflict, the User Agreement(s) shall control. You further agree and understand that the
        defined terms used in this Staking Agreement, if defined in your User Agreement(s), shall
        have the meanings set forth in your User Agreement(s). Your use of our Staking service must
        comply with your User Agreement(s).
      </p>
      <p>
        You agree and understand that by accessing or using Staking following any change to this
        Staking Agreement, your access or use of Staking shall constitute your agreement to the
        amended Staking Agreement, and you agree to be legally bound by its terms and conditions as
        amended. You should, therefore, read this Staking Agreement from time to time. If you do not
        agree to be bound by this Staking Agreement, you should not access or use Staking.
      </p>

      <h2>Permission</h2>
      <p>
        Subject to the terms and conditions set forth in this Staking Agreement, we hereby grant to
        you a non-assignable, non-exclusive, worldwide, and royalty-free limited license to use our
        Staking service. You may not use the Staking service if (a) you are not at least 18 years
        old and do not have the legal capacity to enter into this Staking Agreement, (b) you are a
        person barred from using Staking under the applicable laws of the United States or other
        countries, including the country in which you are resident or from which you use Staking,
        and (c) you do not agree to be legally bound by the terms and conditions of this Staking
        Agreement in their entirety.
      </p>

      <h2>Availability</h2>
      <p>
        When you hold certain supported Digital Assets in your wallet you may be given the option to
        “stake” these assets in a proof of stake network via staking services provided by Dora
        Factory. Dora Factory Staking Services are not currently available to customers in sanction
        countries and certain other jurisdictions.
      </p>

      <h2>The Service; Rewards; Services Fee; Limitations</h2>
      <p>
        If you instruct Dora Factory to stake your assets, Dora Factory or a Staking Services
        Provider will facilitate the staking of those assets on your behalf by acting as a
        transaction validator on the applicable network for the supported Digital Asset you stake.
      </p>
      <p>
        If Dora Factory or the Staking Services Provider successfully validates a block of
        transactions in that supported Digital Asset, you will earn a reward granted by that
        supported Digital Asset’s network. The timing and amount of your reward will be determined
        by the protocols of the applicable network. Dora Factory does not determine the timing or
        amount of your reward. There may be a delay between when you choose to stake your supported
        Digital Asset and when you start owing rewards because each network protocol’s activation
        queue determines when rewards start accruing.
      </p>
      <p>
        Dora Factory will distribute any earned rewards to you after receipt by Dora Factory, minus
        a Staking Services Fee of 5%–100% of the rewards determined by the protocol. Some of the
        Staking Services Fee is used to pay ‘gas’ fees, third party fees, and infrastructure costs
        associated with staking and the remainder is retained by Dora Factory.
      </p>
      <p>
        Some Digital Asset networks subject staked assets to “slashing” if the transaction validator
        representing those assets incorrectly validates a transaction. Dora Factory and/or the
        Staking Services Provider will use commercially reasonable efforts to prevent any staked
        assets from slashing; however, in the event they are, unless otherwise provided in this
        Staking Agreement or your User Agreement, Dora Factory will promptly replace your assets at
        no additional cost. For the avoidance of doubt, Dora Factory will not replace assets subject
        to slashing as a result of network, network provider, or operator errors, or any other basis
        covered by this Staking Agreement or in the Disclaimer of Liability or Force Majeure
        sections of your User Agreement.
      </p>
      <p>
        Some Digital Asset Networks may impose a waiting period while staking, during which your
        staked assets will be restricted from transfer or sale (“Unbonding Period”). If you instruct
        Dora Factory to unstake your assets, you will not have access to your assets until the
        expiration of any applicable Unbonding Period. Dora Factory may also impose an additional
        waiting period in order to facilitate transfer of your assets to your Dora Factory Account
        after the expiration of any applicable Unbonding Period. If rewards are collected on your
        staked assets during an Unbonding Period, Dora Factory will credit these rewards to your
        Dora Factory Account.
      </p>

      <h2>No Guarantee of Rewards</h2>
      <p>
        The staking rewards and reward rates vary by the networks. This rate is an estimate and may
        change over time. Dora Factory DOES NOT GUARANTEE THAT YOU WILL RECEIVE ANY STAKING REWARDS,
        INCLUDING THE STAKING REWARDS RATES.
      </p>

      <h2>Governance and Voting</h2>
      <p>
        For certain Digital Assets, the underlying protocols offer stakers the ability to vote on
        matters related to the governance of protocol-level issues. Dora Factory may or may not
        support voting for such assets, and may cease supporting voting at any time in its
        discretion. In certain cases, Dora Factory may vote on your behalf where Dora Factory or the
        applicable protocol does not support delegated voting. In such instances, Dora Factory will
        vote in favor of the decision that it believes supports the most use cases for Dora Factory
        users.
      </p>

      <h2>Suspension or Termination</h2>
      <p>
        You agree and understand that we may, in our sole discretion, change, suspend, discontinue,
        or terminate any aspect of our Staking service, or its availability to you, at any time and
        without notice.
      </p>

      <h2>Warranties and Limitation of Liability</h2>
      <p>
        You represent and warrant that you have the requisite authority to enter into this Staking
        Agreement according to its terms, and its performance does not violate any laws,
        regulations, or agreements applicable to you.
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          The Staking service is provided on an “as is” basis. You and your affiliates disclaim any
          and all express or implied warranties, including, any warranties of merchantability,
          fitness for a particular purpose or use, or of non-infringement or any other violation of
          any third party intellectual property rights. We and our affiliates do not guarantee or
          make any warranty concerning the accuracy or reliability of the staking service, and
          disclaim any and all liability (whether in tort or contract or otherwise) for any direct,
          indirect, incidental, special, or consequential loss or damage arising from any delay or
          loss of access to the staking service, or otherwise in connection with the Staking
          service, staking rewards, or staked digital assets.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          To the maximum extent permitted under applicable law, and notwithstanding any of the
          foregoing, we will have no liability under this staking agreement. For the avoidance of
          doubt, the warranties and limitations of liability set forth in this section are in
          addition to, and not in place of, those set forth in the user agreement.
        </span>
      </p>

      <h2>Public Good Staking</h2>
      <p>
        Public Good Staking allows users to stake certain tokens to Dora Factory’s node validators.
      </p>
      <p>
        Public Good Staking is conducted through staking tokens using a Wallet to interact with
        related smart contracts or allocate tokens through smart contracts. Each ecosystem will have
        minimum and maximum periods to the staking of tokens. Each ecosystem will also have
        requirements when users unstake tokens from our validators.
      </p>
      <p>
        Dora Factory might from time to time, in its sole direction, decide to implement incentive
        programs for users to participate in Public Good Staking. Such incentive programs will be
        determined solely by Dora Factory, and be published on Dora Factory’s social media accounts
        or websites. Users might also receive governance credit for use in connection with voting
        relating to that ecosystem.
      </p>

      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          You accept and agree to be bound by this Agreement by acknowledging such acceptance during
          the registration process (if applicable) or by accessing and using the Website and Company
          Services. If you do not agree to abide by this Agreement, or to modifications that Company
          may make to this Agreement in the future, do not use or access or continue to use or
          access the Company Services or the Website.
        </span>
      </p>

      <h2>Token Migration</h2>
      <p>
        The Token Migration interface allows you to access a protocol that migrates your
        Ethereum-based ERC-20 DORA tokens to the Dora Vota network (i.e., a CosmosSDK appchain). You
        may be required to pay a “gas” fee associated with interacting with the Ethereum blockchain
        network, and you are solely responsible for these fees and costs. Once you initiate a
        migration, it cannot be modified, reversed, or otherwise altered, and the originating
        Ethereum-based ERC-20 DORA tokens will be unrecoverable. While migration will typically be
        completed within 7 days, delays may occur due to network congestion.
      </p>

      <h3>Your Responsibility in Token Migration</h3>
      <p>
        You are solely responsible for ensuring that you own and have access to the network
        addresses used in the Token Migration interface. We cannot and are unable to verify the
        ownership of your network addresses. You are also solely responsible for ensuring that your
        Ethereum Wallet is properly connected and that the Dora Vota network address you entered is
        correct and complete. Any errors in your network addresses, specifically your Dora Vota
        network address, whether due to human error, technical failure, or other causes, may result
        in irreversible loss of your Digital Assets. We are not liable for any damages you may
        suffer as a result of any incorrect or incomplete network address, or your loss of access to
        your Wallet or network address, including permanent loss of Digital Assets, failed
        transactions, or the inability to access your Digital Assets. You own and control the
        Digital Assets in your Wallet and network address, and are solely responsible for their
        security. We do not have control or custody over the content and Digital Assets in your
        Wallet or network address.
      </p>
      <h3>Smart Contract Risks</h3>
      <p>
        By using the Token Migration interface, you agree and understand that your use is at your
        own risk. You are interacting directly with smart contracts on the networks, which involves
        inherent risks, including, but not limited to, bugs, exploits, technical issues, errors, and
        other potential vulnerabilities, and we are not liable for any such risks. We do not execute
        any transactions on your behalf. Any transactions initiated by you on the smart contracts
        cannot be modified or reversed.
      </p>
      <h3>Availability</h3>
      <p>
        We reserve the right to modify, suspend, or terminate the Token Migration interface at any
        time without notice to you. We do not guarantee and warrant that the Token Migration
        interface will always be available to you. The Token Migration interface is not currently
        available to customers in sanction countries and certain other jurisdictions, specifically
        customers residing in Excluded Jurisdiction or who are Excluded Individuals.
      </p>
      <h3>Disclaimers</h3>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          The Token Migration interface is a non-exclusive means to facilitate access to the
          relevant protocol and/or smart contracts, and is provided on an “as is” basis. We and our
          affiliates disclaim any and all express or implied warranties, including, any warranties
          of merchantability, fitness for a particular purpose or use, or of non-infringement or any
          other violation of any third party intellectual property rights. We and our affiliates do
          not guarantee or make any warranty concerning the accuracy or reliability of the Token
          Migration interface, and disclaim any and all liability (whether in tort or contract or
          otherwise) for any direct, indirect, incidental, special, or consequential loss or damage
          arising from any delay or loss of access to the Token Migration interface, including the
          bridging smart contract or otherwise in connection with the Token Migration interface.
        </span>
      </p>

      <h2>User Representations</h2>
      <h3>Regarding Your Registration</h3>
      <p>
        By using the Company Services, you represent and warrant that:
        <ul>
          <li>all registration information you submit is truthful and accurate;</li>
          <li>you will maintain the accuracy of such information;</li>
          <li>
            you will keep your password confidential and will be responsible for all use of your
            password and account;
          </li>
          <li>
            you are not a minor in the jurisdiction in which you reside, or if a minor, you have
            received parental permission to use this Website; and
          </li>
          <li>
            your use of the Company Services does not violate any applicable law or regulation.
          </li>
        </ul>
      </p>
      <p>
        You also agree to: (a) provide true, accurate, current and complete information about
        yourself as prompted by the Website’s registration form and (b) maintain and promptly update
        registration data to keep it true, accurate, current and complete. If you provide any
        information that is untrue, inaccurate, not current or incomplete, or Company has reasonable
        grounds to suspect that such information is untrue, inaccurate, not current or incomplete,
        Company has the right to suspend or terminate your account and refuse any and all current or
        future use of the Website (or any portion thereof).
      </p>
      <p>
        We reserve the right to remove or reclaim or change a user name you select if we determine
        appropriate in our discretion, such as when the user name is obscene or otherwise
        objectionable or when a trademark owner complains about a username that does not closely
        relate to a user's actual name.
      </p>

      <h3>Regarding Content You Provide</h3>
      <p>
        The Website may invite you to chat or participate in blogs, message boards, online forums
        and other functionality and may provide you with the opportunity to create, submit, post,
        display, transmit, perform, publish, distribute or broadcast content and materials to
        Company and/or to or via the Website, including, without limitation, text, writings, video,
        audio, photographs, graphics, comments, suggestions, subjects or personally identifiable
        information or other material (collectively “Contributions”). Any Contributions you transmit
        to Company will be treated as non-confidential and non-proprietary. When you create or make
        available a Contribution, you thereby represent and warrant that:
      </p>
      <ul>
        <li>
          the creation, distribution, transmission, public display and performance, accessing,
          downloading and copying of your Contribution does not and will not infringe the
          proprietary rights, including but not limited to the copyright, patent, trademark, trade
          secret or moral rights of any third party;
        </li>
        <li>
          you are the creator and owner of or have the necessary licenses, rights, consents,
          releases and permissions to use and to authorize Company and the Website users to use your
          Contributions as necessary to exercise the licenses granted by you under this Agreement;
        </li>
        <li>
          you have the written consent, release, and/or permission of each and every identifiable
          individual person in the Contribution to use the name or likeness of each and every such
          identifiable individual person to enable inclusion and use of the Contribution in the
          manner contemplated by this Website;
        </li>
        <li>
          your Contribution is not obscene, lewd, lascivious, filthy, violent, harassing or
          otherwise objectionable (as determined by Company), libelous or slanderous, does not
          ridicule, mock, disparage, intimidate or abuse anyone, does not advocate the violent
          overthrow of any government, does not incite, encourage or threaten physical harm against
          another, does not violate any applicable law, regulation, or rule, and does not violate
          the privacy or publicity rights of any third party;
        </li>
        <li>
          your Contribution does not contain material that solicits personal information from anyone
          under 18 or exploit people under the age of 18 in a sexual or violent manner, and does not
          violate any law concerning child pornography or otherwise intended to protect the health
          or well-being of minors;
        </li>
        <li>
          your Contribution does not include any offensive comments that are connected to race,
          national origin, gender, sexual preference or physical handicap; and
        </li>
        <li>
          your Contribution does not otherwise violate, or link to material that violates, any
          provision of this Agreement or any applicable law or regulation.
        </li>
      </ul>

      <h2>Contribution License</h2>
      <p>
        By posting Contributions to any part of the Website or Company Services, or making them
        accessible to the Website or Company Services by linking your account to any of your social
        network accounts, you automatically grant, and you represent and warrant that you have the
        right to grant, to Company an unrestricted, unconditional, unlimited, irrevocable,
        perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right and
        license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle,
        archive, store, cache, publicly perform, publicly display, reformat, translate, transmit,
        excerpt (in whole or in part) and distribute such Contributions (including, without
        limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, to
        prepare derivative works of, or incorporate into other works, such Contributions, and to
        grant and authorize sublicenses of the foregoing. The use and distribution may occur in any
        media formats and through any media channels. Such use and distribution license will apply
        to any form, media, or technology now known or hereafter developed, and includes our use of
        your name, company name, and franchise name, as applicable, and any of the trademarks,
        service marks, trade names and logos, personal and commercial images you provide. Company
        does not assert any ownership over your Contributions; rather, as between us and you,
        subject to the rights granted to us in this Agreement, you retain full ownership of all of
        your Contributions and any intellectual property rights or other proprietary rights
        associated with your Contributions.
      </p>
      <p>
        Company has the right, in our sole and absolute discretion, to (a) edit, redact or otherwise
        change any Contributions, (b) re-categorize any Contributions to place them in more
        appropriate locations or (c) pre-screen or delete any Contributions that are determined to
        be inappropriate or otherwise in violation of this Agreement.
      </p>
      <p>
        By uploading your Contributions to the Website, you hereby authorize Company to grant to
        each end user a personal, limited, non-transferable, perpetual, non-exclusive, royalty-free,
        fully-paid license to access, download, print and otherwise use your Contributions for their
        internal purposes and not for distribution, transfer, sale or commercial exploitation of any
        kind.
      </p>

      <h2>Guidelines for Reviews</h2>
      <p>
        Company may accept, reject or remove reviews in its sole discretion. Company has absolutely
        no obligation to screen reviews or to delete reviews, even if anyone considers reviews
        objectionable or inaccurate. Those persons posting reviews should comply with the following
        criteria: (a) reviewers should have firsthand experience with the person/entity being
        reviewed; (b) reviews should not contain: offensive language, profanity, or abusive, racist,
        or hate language; discriminatory references based on religion, race, gender, national
        origin, age, marital status, sexual orientation or disability; or references to illegal
        activity; (c) reviewers should not be affiliated with competitors if posting negative
        reviews; (d) reviewers should not make any conclusions as to the legality of conduct; and
        (e) reviewers may not post any false statements or organize a campaign encouraging others to
        post reviews, whether positive or negative. Reviews are not endorsed by Company, and do not
        represent the views of Company or of any affiliate or partner of Company. Company does not
        assume liability for any review or for any claims, liabilities or losses resulting from any
        review. By posting a review, the reviewer hereby grants to Company a perpetual,
        non-exclusive, worldwide, royalty-free, fully-paid, assignable and sublicensable license to
        Company to reproduce, modify, translate, transmit by any means, display, perform and/or
        distribute all content relating to reviews.
      </p>

      <h2>Mobile Application License</h2>
      <h3>Use License</h3>
      <p>
        If you are accessing the Company Services via a mobile application, then Company grants you
        a revocable, nonexclusive, non-transferable, limited right to install and use the
        application on wireless handsets owned and controlled by you, and to access and use the
        application on such devices strictly in accordance with the terms and conditions of this
        license. You shall use the application strictly in accordance with the terms of this license
        and shall not:
      </p>
      <ul>
        <li>
          decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt
          the application;
        </li>
        <li>
          make any modification, adaptation, improvement, enhancement, translation or derivative
          work from the application;
        </li>
        <li>
          violate any applicable laws, rules or regulations in connection with your access or use of
          the application;
        </li>
        <li>
          remove, alter or obscure any proprietary notice (including any notice of copyright or
          trademark) of Company or its affiliates, partners, suppliers or the licensors of the
          application;
        </li>
        <li>
          use the application for any revenue generating endeavor, commercial enterprise, or other
          purpose for which it is not designed or intended;
        </li>
        <li>
          make the application available over a network or other environment permitting access or
          use by multiple devices or users at the same time;
        </li>
        <li>
          use the application for creating a product, service or software that is, directly or
          indirectly, competitive with or in any way a substitute for the application;
        </li>
        <li>
          use the application to send automated queries to any website or to send any unsolicited
          commercial email; or
        </li>
        <li>
          use any proprietary information or interfaces of Company or other intellectual property of
          Company in the design, development, manufacture, licensing or distribution of any
          applications, accessories or devices for use with the application.
        </li>
      </ul>

      <h3>Terms Applicable to Apple and Android Devices</h3>
      <p>
        The following terms apply when you use a mobile application obtained from either the Apple
        Store or Google Play to access the Company Services. You acknowledge that this Agreement is
        concluded between you and Company only, and not with Apple Inc. or Google, Inc. (each an
        “App Distributor”), and Company, not an App Distributor, is solely responsible for the
        Company application and the content thereof.
      </p>
      <ul>
        <li>
          Scope of license: The license granted to you for the Company application is limited to a
          non-transferable license to use the Company application on a device that utilizes the
          Apple iOS or Android operating system, as applicable, and in accordance with the usage
          rules set forth in the applicable App Distributor terms of service.
        </li>
        <li>
          Maintenance and support: Company is solely responsible for providing any maintenance and
          support services with respect to the Company application, as specified in this Agreement,
          or as required under applicable law. You acknowledge that each App Distributor has no
          obligation whatsoever to furnish any maintenance and support services with respect to the
          Company application.
        </li>
        <li>
          Warranty: Company is solely responsible for any product warranties, whether express or
          implied by law, to the extent not effectively disclaimed. In the event of any failure of
          the Company application to conform to any applicable warranty, you may notify an App
          Distributor, and the App Distributor, in accordance with its terms and policies, may
          refund the purchase price, if any, paid for the Company application, and to the maximum
          extent permitted by applicable law, an App Distributor will have no other warranty
          obligation whatsoever with respect to the Company application, and any other claims,
          losses, liabilities, damages, costs or expenses attributable to any failure to conform to
          any warranty will be Company’s sole responsibility.
        </li>
        <li>
          Product claims: You acknowledge that Company, not an App Distributor, is responsible for
          addressing any claims of yours or any third party relating to the Company application or
          your possession and/or use of the Company application, including, but not limited to: (a)
          product liability claims; (b) any claim that the Company application fails to conform to
          any applicable legal or regulatory requirement; and (c) claims arising under consumer
          protection or similar legislation.
        </li>
        <li>
          Intellectual property rights: You acknowledge that, in the event of any third party claim
          that the Company application or your possession and use of the Company application
          infringes a third party’s intellectual property rights, the App Distributor will not be
          responsible for the investigation, defense, settlement and discharge of any such
          intellectual property infringement claim.
        </li>
        <li>
          Legal compliance: You represent and warrant that (d) you are not located in a country that
          is subject to a U.S. government embargo, or that has been designated by the U.S.
          government as a “terrorist supporting” country; and (e) you are not listed on any U.S.
          government list of prohibited or restricted parties.
        </li>
        <li>
          Third party terms of agreement: You must comply with applicable third party terms of
          agreement when using the Company application, e.g., if you have a VoIP application, then
          you must not be in violation of their wireless data service agreement when using the
          Company application.
        </li>
        <li>
          Third party beneficiary: Company and you acknowledge and agree that the App Distributors,
          and their subsidiaries, are third party beneficiaries of this Agreement, and that, upon
          your acceptance of the terms and conditions of this Agreement, each App Distributor will
          have the right (and will be deemed to have accepted the right) to enforce this Agreement
          against you as a third party beneficiary thereof.
        </li>
      </ul>

      <h2>Social Media</h2>
      <p>
        As part of the functionality of the Website, you may link your account with online accounts
        you may have with third party service providers (each such account, a “Third Party Account”)
        by either: (a) providing your Third Party Account login information through the Website; or
        (b) allowing Company to access your Third Party Account, as is permitted under the
        applicable terms and conditions that govern your use of each Third Party Account. You
        represent that you are entitled to disclose your Third Party Account login information to
        Company and/or grant Company access to your Third Party Account (including, but not limited
        to, for use for the purposes described herein), without breach by you of any of the terms
        and conditions that govern your use of the applicable Third Party Account and without
        obligating Company to pay any fees or making Company subject to any usage limitations
        imposed by such third party service providers. By granting Company access to any Third Party
        Accounts, you understand that (a) Company may access, make available and store (if
        applicable) any content that you have provided to and stored in your Third Party Account
        (the “Social Network Content”) so that it is available on and through the Website via your
        account, including without limitation any friend lists, and (b) Company may submit and
        receive additional information to your Third Party Account to the extent you are notified
        when you link your account with the Third Party Account. Depending on the Third Party
        Accounts you choose and subject to the privacy settings that you have set in such Third
        Party Accounts, personally identifiable information that you post to your Third Party
        Accounts may be available on and through your account on the Website.{' '}
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          Please note that if a Third Party Account or associated service becomes unavailable or
          Company’s access to such Third Party Account is terminated by the third party service
          provider
        </span>
        , then Social Network Content may no longer be available on and through the Website. You
        will have the ability to disable the connection between your account on the Website and your
        Third Party Accounts at any time. Please note that your relationship with the third party
        service providers associated with your third party accounts is governed solely by your
        agreement(s) with such third party service providers. Company makes no effort to review any
        Social Network Content for any purpose, including but not limited to, for accuracy, legality
        or non-infringement, and Company is not responsible for any Social Network Content. You
        acknowledge and agree that Company may access your email address book associated with a
        Third Party Account and your contacts list stored on your mobile device or tablet computer
        solely for the purposes of identifying and informing you of those contacts who have also
        registered to use the Website. At your request made via email to our email address listed
        below, or through your account settings (if applicable), Company will deactivate the
        connection between the Website and your Third Party Account and delete any information
        stored on Company’s servers that was obtained through such Third Party Account, except the
        username and profile picture that become associated with your account.
      </p>

      <h2>Submissions</h2>
      <p>
        You acknowledge and agree that any questions, comments, suggestions, ideas, feedback or
        other information about the Website or the Company Services (“Submissions”) provided by you
        to Company are non-confidential and Company (as well as any designee of Company) shall be
        entitled to the unrestricted use and dissemination of these Submissions for any purpose,
        commercial or otherwise, without acknowledgment or compensation to you.
      </p>

      <h2>Prohibited Activities</h2>
      <p>
        You may not access or use the Website or Company Services for any other purpose other than
        that for which Company makes it available. The Website and Company Services may not be used
        in connection with any commercial endeavors except those that are specifically endorsed or
        approved by Company. Prohibited activity includes, but is not limited to:
      </p>
      <ul>
        <li>criminal or tortious activity;</li>
        <li>
          engage in the sale of any security or investment vehicle for which a license or permit is
          required;
        </li>
        <li>
          systematic retrieval of data or other content from the Website to create or compile,
          directly or indirectly, a collection, compilation, database or directory without written
          permission from Company;
        </li>
        <li>
          making any unauthorized use of the Company Services, including collecting usernames and/or
          email addresses of users by electronic or other means for the purpose of sending
          unsolicited email, or creating user accounts by automated means or under false pretenses;
        </li>
        <li>
          tricking, defrauding or misleading Company and other users, especially in any attempt to
          learn sensitive account information such as passwords;
        </li>
        <li>
          engaging in any automated use of the system, such as using any data mining, robots or
          similar data gathering and extraction tools;
        </li>
        <li>
          interfering with, disrupting, or creating an undue burden on the Website or the networks
          or services connected to the Website;
        </li>
        <li>
          attempting to impersonate another user or person or using the username of another user;
        </li>
        <li>selling or otherwise transferring your profile;</li>
        <li>
          using any information obtained from the Website in order to harass, abuse, or harm another
          person;
        </li>
        <li>
          using the Company Services as part of any effort to compete with Company or to provide
          services as a service bureau;
        </li>
        <li>
          deciphering, decompiling, disassembling or reverse engineering any of the software
          comprising or in any way making up a part of the Website;
        </li>
        <li>
          attempting to bypass any measures of the Website designed to prevent or restrict access to
          the Website, or any portion of the Website;
        </li>
        <li>
          harassing, annoying, intimidating or threatening any Company employees or agents engaged
          in providing any portion of the Company Services to you;
        </li>
        <li>deleting the copyright or other proprietary rights notice from any Website content;</li>
        <li>
          except as may be the result of standard search engine or Internet browser usage, using or
          launching, developing or distributing any automated system, including, without limitation,
          any spider, robot (or “bot”), cheat utility, scraper or offline reader that accesses the
          Website, or using or launching any unauthorized script or other software; or
        </li>
        <li>
          using the Website or Company Services in a manner inconsistent with any and all applicable
          laws and regulations.
        </li>
      </ul>

      <h2>No Professional Advice or Fiduciary Duties</h2>
      <p>
        All information provided in connection with your access and use of the Website and Company
        Services should not and may not be construed as professional advice. You should not take,
        and should refrain from taking, any action based on any information contained on the Website
        or in the Company Services, or any other information we make available at any time,
        including, without limitation, blog posts, articles, links to third-party content, discord
        or telegram content, news feeds, tutorials, tweets and videos. Before you make any
        financial, legal or other decisions involving the Company Services or use thereof, you
        should seek independent professional advice from an individual who is licensed and qualified
        in the area for which such advice would be appropriate. This Agreement not intended to, and
        do not, create or impose any fiduciary duties on us. You further agree that the only duties
        and obligations that we have are expressly set out in this Agreement (including in the
        Privacy Policy).
      </p>

      <h2>Acknowledgement of Certain Risks; Other Disclaimers; Release of Claims</h2>
      <p>
        By accessing and using the Website and Company Services, you represent that you understand
        the inherent risks associated with using cryptographic and blockchain-based systems, and
        that you have a working knowledge of the usage and intricacies of Digital Assets. You
        further understand that the markets for these Digital Assets are highly volatile due to
        factors including (but not limited to) adoption, speculation, technology, security, and
        regulation. You acknowledge and accept that the cost and speed of transacting with
        cryptographic and blockchain-based systems are variable and may increase dramatically at any
        time. You further acknowledge and accept the risk that your Digital Assets, or any Digital
        Assets you acquire may lose some or all of their value and you may suffer loss due to the
        fluctuation of prices of tokens and/or significant price slippage and cost. You understand
        that anyone can create a token, including fake versions of existing tokens and tokens that
        falsely claim to represent projects, and acknowledge and accept the risk that you may
        mistakenly trade those or other tokens. You further acknowledge that we are not responsible
        for any of these variables or risks and that we cannot be held liable for any resulting
        losses that you experience while accessing or using the Website or Company Services.
      </p>

      <p>
        The Company Services and your Digital Assets could be impacted by one or more regulatory
        inquiries or regulatory actions, which could impede or limit the ability of to continue to
        make its proprietary software, and thus, could impede or limit your ability to continue to
        use the Company Services.
      </p>
      <p>
        You understand and acknowledge that cryptography is a progressing field with advances in
        code cracking and other technical advancements, such as the development of quantum
        computers, which may present risks to Digital Assets and the Company Services, and could
        result in the theft or loss of your Digital Assets. You acknowledge that the Company
        Services may be subject to flaws and that you are solely responsible for evaluating any code
        provided by the Website or Company Services.
      </p>
      <p>
        Although we intend to provide accurate and timely information on the Website and during your
        use of the Company Services, that intention does not reflect a binding commitment, and the
        Website and other information available when using the Company Services may not be accurate,
        complete, error-free or current. To continue to provide you with as complete and accurate
        information as possible, information may be changed or updated from time to time without
        notice, including, without limitation, information regarding our policies. Accordingly, you
        should verify all information before relying on it in any manner, and all decisions based on
        such information contained on the Website or made available through the Services are your
        sole and absolute responsibility. No representation of any kind or nature is made as to the
        accuracy, completeness or appropriateness for any particular purpose of any pricing or other
        information distributed via the Website or Services. Any reference to a type of Digital
        Asset on the Website or otherwise during the use of the Company Services does not indicate
        our approval or disapproval of the technology on which the Digital Asset relies, and should
        not be used as a substitute for your understanding of the risks specific to each type of
        Digital Asset.
      </p>
      <p>
        Use of the Company Services may carry financial risk. Digital Assets are, by their nature,
        highly experimental, risky, and volatile. You acknowledge and agree that you will access and
        use the Website and the Services at your own risk. By using the Company Services, you
        represent and warrant that you have been, are, and will be solely responsible for making
        your independent appraisal and investigations into the risks of a given transaction and the
        underlying Digital Assets. You represent that you have sufficient knowledge, market
        sophistication, professional advice, and experience to make your evaluation of the merits
        and risks of any transaction conducted in connection with the Company Services or any
        Digital Asset. You accept all consequences of using the Services, including the risk that
        you may lose access to your Digital Assets indefinitely. All transaction decisions are made
        solely by you. Notwithstanding anything in this Agreement, we accept no responsibility
        whatsoever for, and will in no circumstances be liable to you in connection with, your use
        of the Company Services for performing Digital Asset transactions.
      </p>

      <p>
        We are a developer of software. We do not operate a Digital Asset exchange platform or offer
        trade execution or clearing services and, therefore, has no oversight, involvement, or
        control concerning your transactions using the Services. All transactions between users of
        our software are executed peer-to-peer directly between the users wallets through smart
        contracts. You are responsible for complying with all laws that may be applicable to or
        govern your use of the Services, including, but not limited to, the Commodity Exchange Act
        and the regulations promulgated thereunder by the U.S. Commodity Futures Trading Commission
        (“CFTC”), the federal securities laws and the regulations promulgated thereunder by the U.S.
        Securities and Exchange Commission (“SEC”) and all foreign applicable laws.
      </p>
      <p>
        You understand that the Company is not registered or licensed by the CFTC, SEC, or any
        financial regulatory authority. No financial regulatory authority has reviewed or approved
        the use of the Website or company Services. The Website and the Company-developed software
        do not constitute advice or a recommendation concerning any commodity, security, or other
        Digital Asset or instrument. Company is not acting as an investment adviser or commodity
        trading adviser to any person or entity.
      </p>

      <h2>Intellectual Property Rights</h2>
      <p>
        The content on the Website (“Company Content”) and the trademarks, service marks,
        algorithms, codes, programs, subjects, and logos contained therein (“Marks”) are owned by or
        licensed to Company and are subject to copyright and other intellectual property rights
        under Cayman Islands and foreign laws and international conventions. Company Content,
        includes, without limitation, all source code, databases, functionality, software, website
        designs, audio, video, text, photographs and graphics. All Company graphics, logos, designs,
        page headers, button icons, scripts and service names are registered trademarks, common law
        trademarks or trade dress of Company in Cayman Islands and/or other countries. Company’s
        trademarks and trade dress may not be used, including as part of trademarks and/or as part
        of domain names, in connection with any product or service in any manner that is likely to
        cause confusion and may not be copied, imitated, or used, in whole or in part, without the
        prior written permission of the Company.
      </p>
      <p>
        Company Content on the Website is provided to you “AS IS” for your information and personal
        use only and may not be used, copied, reproduced, aggregated, distributed, transmitted,
        broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes
        whatsoever without the prior written consent of the respective owners. Provided that you are
        eligible to use the Website, you are granted a limited license to access and use the Website
        and the Company Content and to download or print a copy of any portion of the Company
        Content to which you have properly gained access solely for your personal, non-commercial
        use. Company reserves all rights not expressly granted to you in and to the Website and
        Company Content and Marks.
      </p>
      <h2>Intellectual Property Claims</h2>
      <p>
        We respect the intellectual property rights of others and require that users of our App and
        Services do the same. In accordance with the Digital Millennium Copyright Act of 1998, Title
        17 of the United States Code, Section 512 (“DMCA”), we will respond promptly to claims of
        copyright infringement that are reported to the agent that we have designated to receive
        notifications of claims infringement (its “Designated Agent”). Our Designated Agent is: Dora
        Factory Support (
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          support@dorafactory.org
        </span>
        )
      </p>
      <p>To be sure the matter is handled immediately, your written notice must:</p>
      <ul>
        <li>Contain your physical or electronic signature;</li>
        <li>
          Identify the copyrighted work or other intellectual property alleged to have been
          infringed;
        </li>
        <li>
          Identify the allegedly infringing material in a sufficiently precise manner to allow us to
          locate that material;
        </li>
        <li>
          Contain adequate information by which we can contact you (including postal address,
          telephone number, and email address);
        </li>
        <li>
          Contain a statement that you have a good faith belief that use of the copyrighted material
          or other intellectual property is not authorized by the owner, the owner’s agent or the
          law;
        </li>
        <li>Contain a statement that the information in the written notice is accurate; and</li>
        <li>
          Contain a statement, under penalty of perjury, that you are authorized to act on behalf of
          the copyright or other intellectual property right owner.
        </li>
        <li>
          Unless the notice pertains to copyright or other intellectual property infringement, the
          Agent will be unable to address the listed concern.
        </li>
      </ul>

      <h2>Submitting a DMCA Counter-Notification</h2>
      <p>
        We will notify you that we have removed or disabled access to copyright-protected material
        that you provided, if such removal is pursuant to a validly received DMCA take-down notice.
        In response, you may provide our Agent with a written counter-notification that includes the
        following information:
      </p>
      <ul>
        <li>Your physical or electronic signature;</li>
        <li>
          Identification of the material that has been removed or to which access has been disabled,
          and the location at which the material appeared before it was removed or access to it was
          disabled;
        </li>
        <li>
          A statement from you under the penalty of perjury, that you have a good faith belief that
          the material was removed or disabled as a result of a mistake or misidentification of the
          material to be removed or disabled; and
        </li>
        <li>
          Your name, physical address and telephone number, and a statement that you consent to the
          jurisdiction of a court for the judicial district in which your physical address is
          located, or if your physical address is outside of the United States, for any judicial
          district in which we may be located, and that you will accept service of process from the
          person who provided notification of allegedly infringing material or an agent of such
          person.
        </li>
      </ul>
      <p>
        We reserve the right, in our sole discretion, to terminate the account or access of any user
        of the Website and Company Services who is the subject of repeated DMCA or other
        infringement notifications.
      </p>

      <h2>Third Party Websites and Content</h2>
      <p>
        The Website contains (or you may be sent through the Website or the Company Services) links
        to other websites (“Third Party Websites”) as well as articles, photographs, text, graphics,
        pictures, designs, music, sound, video, information, applications, software and other
        content or items belonging to or originating from third parties (the “Third Party Content”).
        Such Third Party Websites and Third Party Content are not investigated, monitored or checked
        for accuracy, appropriateness, or completeness by us, and we are not responsible for any
        Third Party Websites accessed through the Website or any Third Party Content posted on,
        available through or installed from the Website, including the content, accuracy,
        offensiveness, opinions, reliability, privacy practices or other policies of or contained in
        the Third Party Websites or the Third Party Content. Inclusion of, linking to or permitting
        the use or installation of any Third Party Website or any Third Party Content does not imply
        approval or endorsement thereof by us. If you decide to leave the Website and access the
        Third Party Websites or to use or install any Third Party Content, you do so at your own
        risk and you should be aware that our terms and policies no longer govern. You should review
        the applicable terms and policies, including privacy and data gathering practices, of any
        website to which you navigate from the Website or relating to any applications you use or
        install from the Website. Any purchases you make through Third Party Websites will be
        through other websites and from other companies, and Company takes no responsibility
        whatsoever in relation to such purchases which are exclusively between you and the
        applicable third party.
      </p>

      <h2>Management and Company Services</h2>
      <p>
        Company reserves the right but does not have the obligation to:
        <ul>
          <li>monitor the Website and Company Services for violations of this Agreement;</li>
          <li>
            take appropriate legal action against anyone who, in Company’s sole discretion, violates
            this Agreement, including without limitation, reporting such user to law enforcement
            authorities;
          </li>
          <li>
            in Company’s sole discretion and without limitation, refuse, restrict access to or
            availability of, or disable (to the extent technologically feasible) any user’s
            contribution or any portion thereof that may violate this Agreement or any Company
            policy;
          </li>
          <li>
            in Company’s sole discretion and without limitation, notice or liability to remove from
            the Website or otherwise disable all files and content that are excessive in size or are
            in any way burdensome to Company’s systems;
          </li>
          <li>
            otherwise manage the Website and Company Services in a manner designed to protect the
            rights and property of Company and others and to facilitate the proper functioning of
            the Website.
          </li>
        </ul>
      </p>

      <h2>Privacy Policy</h2>
      <p>
        We care about the privacy of our users. Please review the Company Privacy Policy. By using
        the Website or Company Services, you are consenting to have your personal data transferred
        to and processed in Cayman Islands, which may have less protections than your jurisdiction
        of residence.. By accessing or using the Website or the Company Services, you are consenting
        to the terms of our Privacy Policy.
      </p>

      <h2>Term and Termination</h2>
      <p>
        This Agreement shall remain in full force and effect while you use the Website or are
        otherwise a user or member of the Website, as applicable. You may terminate your use or
        participation at any time, for any reason, by following the instructions for terminating
        user accounts in your account settings, if available, or by contacting us using the contact
        information below.
      </p>

      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          Without limiting any other provision of this Agreement, Company reserves the right to, in
          Company’s sole discretion and without notice or liability, deny access to and use of the
          Website and the Company Services, to any person for any reason or for no reason at all,
          including without limitation for breach of any representation, warranty or covenant
          contained in this Agreement, or of any applicable law or regulation, and company may
          terminate your use or participation in the Website and the Company Services, delete your
          profile and any content or information that you have posted at any time, without warning,
          in Company’s sole discretion.
        </span>
      </p>

      <p>
        In order to protect the integrity of the Website and Company Services, Company reserves the
        right at any time in its sole discretion to block certain IP addresses from accessing the
        Website and Company Services.
      </p>
      <p>
        Any provisions of this Agreement that, in order to fulfill the purposes of such provisions,
        need to survive the termination or expiration of this Agreement, shall be deemed to survive
        for as long as necessary to fulfill such purposes.
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          You understand that certain laws allow you to cancel this Agreement, without any penalty
          or obligation, at any time prior to midnight of Company’s third business day following the
          date of this Agreement, excluding Sundays and holidays. To cancel, email the company using
          the contact information listing below in this Agreement or by accessing your account
          settings. This section applies only to individuals residing in districts with such laws.
        </span>
      </p>

      <p>
        If Company terminates or suspends your account for any reason, you are prohibited from
        registering and creating a new account under your name, a fake or borrowed name, or the name
        of any third party, even if you may be acting on behalf of the third party. In addition to
        terminating or suspending your account, Company reserves the right to take appropriate legal
        action, including without limitation pursuing civil, criminal, and injunctive redress.
      </p>

      <h2>Modifications</h2>
      <h3>To Agreement</h3>
      <p>
        We may modify this Agreement from time to time. Any and all changes to this Agreement will
        be posted on the Website and revisions will be indicated by date. You agree to be bound to
        any changes to this Agreement when you use the website and all other Services after any such
        modification becomes effective. Company may also, in its sole discretion, choose to alert
        all users with whom it maintains email information of such modifications by means of an
        email to their most recently provided email address. It is therefore important that you
        regularly review this Agreement and keep your contact information current in your account
        settings to ensure you are informed of changes. You agree that you will periodically check
        the Website for updates to this Agreement. Modifications to this Agreement shall be
        effective after posting.
      </p>
      <h3>To Services</h3>
      <p>
        Company reserves the right at any time to modify or discontinue, temporarily or permanently,
        the Company Services (or any part thereof) with or without notice. You agree that Company
        shall not be liable to you or to any third party for any modification, suspension or
        discontinuance of the Company Services.
      </p>

      <h2>Disputes and Choice of Law</h2>
      <h3>Between Users</h3>
      <p>
        If there is a dispute between users of the Website, or between users and any third party,
        you understand and agree that Company is under no obligation to become involved. We have no
        responsibility for such disputes. In the event that you have a dispute with one or more
        other users, you hereby release Company, its officers, employees, agents and successors in
        rights from claims, demands and damages (actual and consequential) of every kind or nature,
        known or unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in
        any way related to such disputes and/or the Company Services.
      </p>
      <h3>With Company</h3>
      <p>
        All questions of law, rights, and remedies regarding any act, event or occurrence undertaken
        pursuant or relating to this Website or the Company Services shall be governed and construed
        by the laws of Cayman Islands, without regarding to choice of law principles. Any dispute
        arising out of or in connection with the Website or Company Services or this Agreement ,
        including any question regarding its existence, validity or termination (a “Dispute”) shall
        be subject to resolution under this provision.
      </p>
      <p>
        The Company wants to address your concerns without the need for a formal legal dispute.
        Before filing a claim against us you agree to try to resolve the Dispute informally by
        contacting us at{' '}
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          support@dorafactory.org
        </span>{' '}
        to notify us of the actual or potential Dispute. Similarly, we will undertake reasonable
        efforts to contact you to notify you of any actual or potential dispute to resolve any claim
        we may possess informally before taking any formal action. The party that provides the
        notice of the actual or potential Dispute (the “Notifying Party”) will include in that
        notice (a “Notice of Dispute”) the name of User, the Notifying Party’s contact information
        for any communications relating to such Dispute (including for the Notifying Party’s legal
        counsel if it is represented by counsel in connection with such Dispute), and sufficient
        details regarding such Dispute to enable the other party (the “Notified Party”) to
        understand the basis of and evaluate the concerns raised. If the Notified Party responds
        within ten (10) business days after receiving the Notice of Dispute that it is ready and
        willing to engage in good faith discussions in an effort to resolve the Dispute informally,
        then each party shall promptly participate in such discussions in good faith.
      </p>

      <p>
        If, notwithstanding the Notifying Party’s compliance with all of its obligations under the
        preceding paragraph, a Dispute is not resolved within 30 days after the Notice of Dispute is
        sent (or if the Notified Party fails to respond to the Notice of Dispute within ten (10)
        business days), the Notifying Party may initiate an arbitration proceeding as described
        below. If either party purports to initiate arbitration without first providing a Notice of
        Dispute and otherwise complying with all of its obligations under the preceding paragraph,
        then, notwithstanding any other provision of this Agreement, the arbitrator(s) will promptly
        dismiss the claim with prejudice and will award the other party all of its costs and
        expenses (including, without limitation, reasonable attorneys’ fees) incurred in connection
        with such Dispute.
      </p>

      <p>
        Any Dispute that cannot be resolved per the above procedure shall be referred to and finally
        resolved by arbitration administered by the Cayman Islands International Arbitration Centre
        (“SIAC”) in accordance with the Arbitration Rules of the Cayman Islands International
        Arbitration Centre (“SIAC Rules”) for the time being in force, which rules are deemed to be
        incorporated by reference in this clause. Subject, however, to the right of Company, at the
        Company’s sole discretion, to bring an action to seek injunctive relief to enforce this
        Agreement or to stop or prevent an infringement of proprietary or other third party rights
        (or any similar cause of action) in any applicable court in any jurisdiction exists with
        regard to a user. The seat of the arbitration shall be Cayman Islands. The Tribunal shall
        consist of three (3) arbitrator(s). The language of the arbitration shall be English.
      </p>
      <p>
        You and the Company agree that the arbitration of any Dispute shall proceed on an individual
        basis, and neither you nor Company may bring a claim as a part of a class, group,
        collective, coordinated, consolidated or mass arbitration (each, a “Collective
        Arbitration”). Without limiting the generality of the foregoing, a claim to resolve any
        Dispute against Company will be deemed a Collective Arbitration if (a) two (2) or more
        similar claims for arbitration are filed concurrently by or on behalf of one or more
        claimants; and (b) counsel for the claimants are the same, share fees or coordinate across
        the arbitrations. “Concurrently” for purposes of this provision means that both arbitrations
        are pending (filed but not yet resolved) at the same time.
      </p>

      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          To the maximum extent permitted by applicable law, neither you nor Company shall be
          entitled to consolidate, join or coordinate disputes by or against other individuals or
          entities, or arbitrate or litigate any dispute in a representative capacity, including as
          a representative member of a class or in a private attorney general capacity. In
          connection with any dispute (as defined above), any and all such rights are hereby
          expressly and unconditionally waived.
        </span>{' '}
        Without limiting the foregoing, any challenge to the validity of this paragraph shall be
        determined exclusively by the arbitrator.
      </p>

      <p>
        In no event shall any claim, action or proceeding by you related in any way to the Website
        and/or the Company Services (including your visit to or use of the Website and/or the
        Company Services) be instituted more than two (2) years after the cause of action arose. You
        will be liable for any attorneys’ fees and costs if we have to take any legal action to
        enforce this Agreement.
      </p>

      <h2>Corrections</h2>
      <p>
        Occasionally there may be information on the Website that contains typographical errors,
        inaccuracies or omissions that may relate to service descriptions, pricing, availability,
        and various other information. Company reserves the right to correct any errors,
        inaccuracies or omissions and to change or update the information at any time, without prior
        notice.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Company cannot control the nature of all of the content available on the Website or Company
        Services. By operating the Website or Company Services, Company does not represent or imply
        that Company endorses any blogs, contributions or other content available on or linked to by
        the Website or Company Services, including without limitation content hosted on third party
        websites or provided by third party applications, or that Company believes contributions,
        blogs or other content to be accurate, useful or non-harmful. We do not control and are not
        responsible for unlawful or otherwise objectionable content you may encounter on the Website
        or in connection with any contributions. The Company is not responsible for the conduct,
        whether online or offline, of any user of the Website or Company Services.
      </p>

      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          You agree that your use of the Website and Company Services will be at your sole risk. To
          the fullest extent permitted by law, Company, its officers, directors, employees, and
          agents disclaim all warranties, express or implied, in connection with the Website and the
          Company Services and your use thereof, including, without limitation, the implied
          warranties of merchantability, fitness for a particular purpose and non-infringement.
          Company makes no warranties or representations about the accuracy or completeness of the
          Website’s content or the content of any websites linked to this Website and assumes no
          liability or responsibility for any (a) errors, mistakes, or inaccuracies of content and
          materials, (b) personal injury or property damage, of any nature whatsoever, resulting
          from your access to and use of our website, (c) any unauthorized access to or use of our
          secure servers and/or any and all personal information and/or financial information stored
          therein, (d) any interruption or cessation of transmission to or from the Website or
          Company services, (e) any bugs, viruses, Trojan horses, or the like which may be
          transmitted to or through the Website by any third party, and/or (f) any errors or
          omissions in any content and materials or for any loss or damage of any kind incurred as a
          result of the use of any content posted, transmitted, or otherwise made available via the
          Website or Company Services. Company does not warrant, endorse, guarantee, or assume
          responsibility for any product or service advertised or offered by a third party through
          the website or any hyperlinked website or featured in any banner or other advertising, and
          Company will not be a party to or in any way be responsible for monitoring any transaction
          between you and third-party providers of products or services. As with the purchase of a
          product or service through any medium or in any environment, you should use your best
          judgment and exercise caution where appropriate.
        </span>
      </p>

      <h2>Limitations of Liability</h2>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          In no event shall Company or its directors, employees, or agents be liable to you or any
          third party for any direct, indirect, consequential, exemplary, incidental, special or
          punitive damages, including lost profit, lost revenue, loss of data or other damages
          arising from your use of the Website or Company Services, even if Company has been advised
          of the possibility of such damages. Notwithstanding anything to the contrary contained
          herein, Company’s liability to you for any cause whatsoever and regardless of the form of
          the action, will at all times be limited to the amount paid, if any, by you to Company for
          the Company Services during the period of services available prior to any cause of action
          arising.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          Certain laws do not allow limitations on implied warranties or the exclusion or limitation
          of certain damages. If these laws apply to you, some or all of the above disclaimers or
          limitations may not apply to you, and you may have additional rights.
        </span>
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          Certain laws do not allow limitations on implied warranties or the exclusion or limitation
          of certain damages. If these laws apply to you, some or all of the above disclaimers or
          limitations may not apply to you, and you may have additional rights.
        </span>
      </p>

      <p>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          To the maximum extent permitted by law, you further expressly waive and release the
          Company Parties from any and all liability, claims, causes of action, or damages arising
          from or in any way relating to your use of the Website and Company Services and your
          interaction therewith. If you are a California resident, you waive California Civil Code
          Section 1542, which says: “A general release does not extend to claims which the creditor
          does not know or suspect to exist in his favor at the time of executing the release,
          which, if known by him must have materially affected his settlement with the debtor.”
        </span>
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to defend, indemnify and hold Company, its subsidiaries, and affiliates, and their
        respective officers, agents, partners and employees (“Company Parties”), harmless from and
        against, any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees
        and expenses, made by any third party due to or arising out of your contributed content, use
        of the Company Services, and/or arising from a breach of this Agreement and/or any breach of
        your representations and warranties set forth above. Notwithstanding the foregoing, Company
        reserves the right, at your expense, to assume the exclusive defense and control of any
        matter for which you are required to indemnify the Company Parties, and you agree to
        cooperate, at your expense, with Company’s defense of such claims. Company will use
        reasonable efforts to notify you of any such claim, action, or proceeding which is subject
        to this indemnification upon becoming aware of it.
      </p>

      <h2>Notices</h2>
      <p>
        Except as explicitly stated otherwise, any notices given to Company shall be given by email
        to the address listed in the contact information below. Any notices given to you shall be
        given to the email address you provided during the registration process, or such other
        address as each party may specify. Notice shall be deemed to be given twenty-four (24) hours
        after the email is sent, unless the sending party is notified that the email address is
        invalid. We may also choose to send notices by regular mail.
      </p>

      <h2>User Data</h2>
      <p>
        Our Website will maintain certain data that you transfer to the Website for the purpose of
        the performance of the Company Services, as well as data relating to your use of the Company
        Services. Although we perform regular routine backups of data, you are primarily responsible
        for all data that you have transferred or that relates to any activity you have undertaken
        using the Company Services. You agree that Company shall have no liability to you for any
        loss or corruption of any such data, and you hereby waive any right of action against
        Company arising from any such loss or corruption of such data.
      </p>

      <h2>Electronic Contracting</h2>
      <p>
        Your use of the Company Services includes the ability to enter into agreements and/or to
        make transactions electronically.{' '}
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          You acknowledge that your electronic submissions constitute your Agreement and intent to
          be bound by and to pay for such agreements and transactions. Your Agreement and intent to
          be bound by electronic submissions applies to all records relating to all transactions you
          enter into relating to the Company Services, including notices of cancellation, policies,
          contracts, and applications.{' '}
        </span>
        In order to access and retain your electronic records, you may be required to have certain
        hardware and software, which are your sole responsibility.
      </p>

      <h2>Miscellaneous</h2>
      <p>
        This Agreement constitutes the entire agreement between you and Company regarding the use of
        the Company Services. The failure of Company to exercise or enforce any right or provision
        of this Agreement shall not operate as a waiver of such right or provision. The section
        titles in this Agreement are for convenience only and have no legal or contractual effect.
        This Agreement operates to the fullest extent permissible by law. This Agreement and your
        account may not be assigned by you without our express written consent. Company may assign
        any or all of its rights and obligations to others at any time. Company shall not be
        responsible or liable for any loss, damage, delay or failure to act caused by any cause
        beyond Company’s reasonable control. If any provision or part of a provision of this
        Agreement is unlawful, void or unenforceable, that provision or part of the provision is
        deemed severable from this Agreement and does not affect the validity and enforceability of
        any remaining provisions. There is no joint venture, partnership, employment or agency
        relationship created between you and Company as a result of this Agreement or use of the
        Website and Company Services. Upon Company’s request, you will furnish Company any
        documentation, substantiation or releases necessary to verify your compliance with this
        Agreement. You agree that this Agreement will not be construed against the Company by virtue
        of having drafted them. You hereby waive any and all defenses you may have based on the
        electronic form of this Agreement and the lack of signing by the parties hereto to execute
        this Agreement.
      </p>

      <h2>Contact Us</h2>
      <p>
        In order to resolve a complaint regarding the Company Services or to receive further
        information regarding use of the Company Services, please contact Company as set forth
        below:
      </p>
      <p>
        Foundation Name: Matsushiba Foundation <br/>
        Foundation Name: Dora Grant DAO Foundation Email: <br/>
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>support@dorafactory.org</span>
      </p>
    </section>
  </Styled.Article>
);

const Styled: Record<string, AnyStyledComponent> = {};

Styled.Article = styled.article`
  padding: 2rem;

  overflow-wrap: break-word;
  user-select: text;

  margin: 0 auto;
  width: 60rem;
  max-width: 100vw;

  header {
    color: var(--color-text-0);
    margin-bottom: 2rem;

    h1 {
      font: var(--font-extra-book);
      color: var(--color-text-2);
    }
  }

  h2 {
    font: var(--font-large-book);
    color: var(--color-text-2);
    padding: 0.5rem 0;
  }

  h3,
  strong {
    font-weight: 900;
  }

  strong {
    color: var(--color-text-2);
  }

  p {
    padding: 0.5rem 0;
  }

  ul {
    padding: 0.5rem 1rem;
  }
`;
