import { useState } from 'react';

import styled, { type AnyStyledComponent } from 'styled-components';

import { AlertType } from '@/constants/alerts';
import { ButtonAction, ButtonType } from '@/constants/buttons';
import { STRING_KEYS, DORA_LONG_SENTENCE } from '@/constants/localization';

import { layoutMixins } from '@/styles/layoutMixins';

import { useMigrateToken, useStringGetter } from '@/hooks';

import { AlertMessage } from '@/components/AlertMessage';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Tag } from '@/components/Tag';
import { DetailsReceipt } from '@/components/DetailsReceipt';
import { Icon, IconName } from '@/components/Icon';

import { TokensBeforeAfterDiagram } from '../TokensBeforeAfterDiagram';

export const MigrateFormPreviewStep = () => {
  const stringGetter = useStringGetter();

  const {
    resetForm,
    errorMsg,
    needTokenAllowance,
    isAmountValid,
    isDestinationAddressValid,
    isApproveTokenLoading,
    approveTokenTxError,
    isBridgePending,
  } = useMigrateToken();

  const [hasAcknowledgedDuration, setHasAcknowledgedDuration] = useState(false);
  const [hasAcknowledgedLocked, setHasAcknowledgedLocked] = useState(false);

  return (
    <>
      <TokensBeforeAfterDiagram />

      <DetailsReceipt
        header="Estimated timeline"
        headerIcon={<Icon iconName={IconName.Time} />}
        detailItems={[
          {
            key: 'eth_settlement',
            label: 'Ethereum settlement',
            value: (
              <Tag>
                0-12 seconds
              </Tag>
            ),
          },
          {
            key: 'eth_finalization',
            label: 'Ethereum finalization',
            value: (
              <Tag>
                ~20 minutes
              </Tag>
            ),
          },
          {
            key: 'dydx_settlement',
            label: 'Dora Vota settlement',
            value: (
              <Tag>
                ~72 hours
              </Tag>
            ),
          },
        ]}
      />

      {(errorMsg || approveTokenTxError) && (
        <AlertMessage type={AlertType.Error}>
          {errorMsg || approveTokenTxError?.message}
        </AlertMessage>
      )}

      {!needTokenAllowance && (
        <>
          <Checkbox
            checked={hasAcknowledgedDuration}
            onCheckedChange={setHasAcknowledgedDuration}
            id="acknowledge-duration"
            label={DORA_LONG_SENTENCE.CONFIRM_MIGRATION_DISCLAIMER_1}
          />
          <Checkbox
            checked={hasAcknowledgedLocked}
            onCheckedChange={setHasAcknowledgedLocked}
            id="acknowledge-locked"
            label={DORA_LONG_SENTENCE.CONFIRM_MIGRATION_DISCLAIMER_2}
          />
        </>
      )}

      <Styled.ButtonRow>
        <Styled.EditButton onClick={() => resetForm(false)}>Edit</Styled.EditButton>

        <Styled.ConfirmButton
          action={ButtonAction.Primary}
          type={ButtonType.Submit}
          state={{
            isLoading: isApproveTokenLoading || isBridgePending,
            isDisabled:
              (!needTokenAllowance && !(hasAcknowledgedDuration && hasAcknowledgedLocked)) ||
              isBridgePending ||
              !isAmountValid ||
              !isDestinationAddressValid,
          }}
        >
          {needTokenAllowance ? 'Approve Allowance' : 'Confirm Migration'}
        </Styled.ConfirmButton>
      </Styled.ButtonRow>
    </>
  );
};

const Styled: Record<string, AnyStyledComponent> = {};

Styled.ButtonRow = styled.div`
  ${layoutMixins.inlineRow}
  gap: var(--form-input-gap);

  > button {
    padding: 0.75rem 1rem;
  }
`;

Styled.EditButton = styled(Button)`
  --button-backgroundColor: var(--color-layer-5);
  --color-border: var(--color-layer-6);
`;

Styled.ConfirmButton = styled(Button)`
  width: 100%;
`;
