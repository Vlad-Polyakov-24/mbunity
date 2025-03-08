import type { ReactNode } from 'react';
import { classNames, type Mods } from '@shared/lib/classNames';
import { useModal } from '@shared/hooks/useModal';
import { Portal } from '@shared/ui/Portal';
import { Button, ButtonSize, ButtonTheme } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import styles from './Modal.module.scss';
import CrossIcon from '@shared/assets/icons/cross_02.svg';

type ModalProps = {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

export const MODAL_ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const { isMounted, isClosing, modalRef, close } = useModal({
    isOpen,
    onClose,
    animationDelay: MODAL_ANIMATION_DELAY,
  });
  const mods: Mods = {
    [styles.open]: isOpen,
    [styles.closing]: isClosing,
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <div  className={classNames(styles.modal, mods, [])}>
        <div className={styles.modal__overlay} onClick={close}>
          <div
            ref={modalRef}
            className={classNames(styles.modal__content, {}, [className])}
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              theme={ButtonTheme.CLEAR}
              size={ButtonSize.TEXT}
              className={styles.modal__close}
              onClick={onClose}
            >
              <Icon icon={<CrossIcon />} size={IconSize.SIZE_24} />
            </Button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;